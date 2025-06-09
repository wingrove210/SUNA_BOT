import { useMemo, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { TelegramWebApp } from "../../types/telegram";
import Input from "../../components/Input";

const tg = window.Telegram?.WebApp as TelegramWebApp | undefined;
const QUESTIONS: Record<string, { title: string; subtitle: string; questions: string[] }> = {
  love: {
    title: "💖 Для любимого человека",
    subtitle: "Песни о любви, признания, отношения, свадьба, предложение, романтика",
    questions: [
      "Как зовут твоего любимого? Есть ли у него/неё особенное прозвище?",
      "Опиши любимого/любимую тремя словами.",
      "Как познакомились? Есть ли у вашей встречи интересная история?",
      "Какое ваше яркое совместное воспоминание?",
      "Есть ли у вас особые традиции или \"фишки\"?",
      "За что больше всего благодарен(на) этому человеку?",
      "О чём он/она мечтает? Есть ли совместная мечта?",
      "Какие слова или послание ты хочешь ему/ей сказать?",
      "Есть ли у вас любимые цитаты, особенные фразы?",
      "Что ещё важно упомянуть в песне?",
    ],
  },
  family: {
    title: "👨‍👩‍👧‍👦 Для близких",
    subtitle: "Мама, папа, бабушка, дедушка, брат, сестра — всё про семью",
    questions: [
      "Для кого из близких эта песня?",
      "Есть ли особое имя или прозвище в семье?",
      "Опиши этого человека тремя словами.",
      "Какое главное семейное воспоминание?",
      "Есть ли у вашей семьи особые традиции или ритуалы?",
      "Какие добрые или смешные семейные истории всегда вспоминаются?",
      "За что особенно благодарен(на) близким?",
      "Какие ценные советы или уроки запомнились?",
      "О чём мечтает этот человек (или вся семья)?",
      "Какое главное пожелание хочешь передать?",
      "Есть ли особенные семейные слова, шутки, фразы?",
      "Что важно, чтобы обязательно прозвучало в песне?",
    ],
  },
  friends: {
    title: "🎓 Для друзей и коллег",
    subtitle: "Подарок другу, коллеге, учителю, выпускной, благодарность",
    questions: [
      "Для кого эта песня — друг, коллега, учитель, класс?",
      "Есть ли у него/неё прозвище или \"ваше\" имя?",
      "Какими словами опишешь этого человека или коллектив?",
      "Как давно дружите или работаете вместе?",
      "Какое самое яркое общее воспоминание?",
      "Есть ли общие традиции, интересы или проекты?",
      "Какие забавные истории или \"внутряки\" вспоминаются чаще всего?",
      "Чем особенно ценен этот друг/коллега для тебя?",
      "Какие его/её мечты, цели или успехи хочешь отметить?",
      "Что бы ты пожелал(а) этому человеку или коллективу?",
      "Есть ли ваши личные шутки, цитаты, особенные фразы?",
      "Что ещё важно включить в песню (особенности, пожелания)?",
    ],
  },
  hero: {
    title: "🎖️ О герое или солдате",
    subtitle: "Военные, защитники, врачи, спасатели, герои",
    questions: [
      "Как зовут героя? Есть ли у него позывной или прозвище?",
      "Кто он — военный, врач, спасатель? В чём проявил себя?",
      "Откуда он родом? Есть ли важные детали о месте, где служил или работал?",
      "Какой самый значимый поступок или подвиг он совершил?",
      "Какие ценности и принципы для него важны?",
      "Есть ли у него символ, талисман или девиз?",
      "Кто его поддерживает?",
      "Какие моменты из его деятельности стоит обязательно упомянуть?",
      "За что испытываешь к нему гордость или благодарность?",
      "Есть ли слова или фразы, которые хочется включить в песню?",
      "Какое главное послание ты хочешь передать этому герою?",
      "Какие детали помогут сделать песню по-настоящему личной?",
    ],
  },
  child: {
    title: "🍼 Про ребёнка",
    subtitle: "Песни для малышей, от родителей, выпускной из садика, детство",
    questions: [
      "Как зовут малыша? Есть ли у него/неё ласковое имя?",
      "Это мальчик, девочка, двойня или тройня?",
      "Когда родился или когда ждёте появления?",
      "Кто родители? Как ждали малыша?",
      "Какие смешные или милые привычки есть у ребёнка?",
      "Какие чувства испытали при появлении ребёнка?",
      "О чём мечтаете для своего малыша?",
      "Какие важные люди будут рядом с ним?",
      "Какие слова любви и поддержки хотите сказать малышу?",
      "Какое главное пожелание или напутствие хотите дать ему в песне?",
      "Есть ли семейные традиции или реликвии, которые хотите передать?",
      "Какие особые фразы, стишки или колыбельные ассоциируются с ребёнком?",
      "Что ещё важно включить в песню о вашем малыше?",
    ],
  },
  holiday: {
    title: "🎈 Праздник и поздравление",
    subtitle: "День рождения, юбилей, Новый год, любое событие",
    questions: [
      "Какой праздник или событие отмечаете?",
      "Кто главный герой праздника? Как его зовут? Есть ли у него особенное имя?",
      "Какие главные черты характера или увлечения у этого человека?",
      "Какое самое запоминающееся воспоминание связано с этим праздником?",
      "Есть ли особые традиции или ритуалы, связанные с этим событием?",
      "Какие подарки или сюрпризы особенно радуют героя праздника?",
      "Какое главное пожелание хотите передать в этот день?",
      "За что цените или благодарите этого человека?",
      "Какое настроение хотите создать песней?",
      "Есть ли ваши личные фразы, тосты, шутки или кричалки?",
      "Что ещё важно обязательно включить в поздравительную песню?",
    ],
  },
  self: {
    title: "Про себя",
    subtitle: "Личная история, вдохновение, путь, внутренний монолог",
    questions: [
      "Как тебя зовут? Есть ли у тебя особое прозвище?",
      "Какими тремя словами ты бы себя описал(а)?",
      "Чем ты увлекаешься или что тебя вдохновляет?",
      "Какая твоя главная мечта или цель сейчас?",
      "Каким своим достижением ты гордишься?",
      "Какие твои сильные стороны помогают тебе идти вперёд?",
      "С какими трудностями сталкивался(лась) и что из них вынес(ла)?",
      "Кто или что даёт тебе силы не сдаваться?",
      "Каким ты видишь себя через несколько лет?",
      "Какой совет из будущего ты бы себе дал(а)?",
      "Какое главное послание хочешь передать себе через песню?",
      "Есть ли у тебя личные цитаты, девизы или аффирмации?",
      "Что ещё важно рассказать о себе, чтобы песня была личной?",
    ],
  },
  heartbreak: {
    title: "💔 Трек для разбитого сердца",
    subtitle: "Боль, разрыв, катарсис, прощание, преодоление",
    questions: [
      "О ком или о чём твоя боль?",
      "Что стало причиной разрыва или боли?",
      "Какой момент был самым тяжёлым или запомнился больше всего?",
      "Какие эмоции сейчас преобладают?",
      "Какие слова или мысли крутились в голове в этот период?",
      "Есть ли фразы, которые хотелось бы сказать человеку (или самому себе) тогда или сейчас?",
      "Что помогло пережить или помогает отпустить боль?",
      "Что бы ты хотел(а) вынести из этой истории?",
      "Какое главное послание или вывод хочется вложить в песню?",
    ],
  },
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function FormSecond() {
  const query = useQuery();
  const topic = query.get("topic") || "love";
  const data = useMemo(() => QUESTIONS[topic] || QUESTIONS["love"], [topic]);
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    if (tg) {
      tg.expand();
      tg.ready();
      if (tg.MainButton) {
        tg.MainButton.setParams({
          text: "Отправить",
        });
        tg.MainButton.show();

        const onClick = () => navigate('/chat');
        if (tg.onEvent) tg.onEvent('mainButtonClicked', onClick);

        return () => {
          if (tg.offEvent) tg.offEvent('mainButtonClicked', onClick);
        };
      }
    }
  }, [navigate]);

    useEffect(() => {
      if (tg) {
        tg.expand();
        tg.ready();
        if (tg.BackButton) {
          tg.BackButton.show();
          tg.BackButton.onClick(() => {
            if (tg.MainButton) tg.MainButton.hide();
            tg.BackButton?.hide(); // скрыть кнопку назад
            navigate('/chat');
          });
        }
      }
      // Очистка обработчика при размонтировании
      return () => {
        if (tg?.BackButton) tg.BackButton.onClick(() => {});
      };
    }, [navigate]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowError(false);

    if (!event.currentTarget.checkValidity()) {
      setShowError(true);
      return;
    }
    const formData = new FormData(event.currentTarget);
    const answers = data.questions.map((_, idx) => formData.get(`q${idx}`));
    const message = `🎵 *Новая заявка на трек!*\n\n*Тема:* ${data.title}\n\n${data.questions
      .map((q, idx) => `▫️ *${q}*\n${answers[idx] || "-"}`)
      .join("\n\n")}`;

    try {
      const botToken = '7919436616:AAF1STWTxGHYhzUGR7mGkgLAGhuCJXWvZiA';
      // Получаем chat_id пользователя из Telegram WebApp
      const chatId = tg?.initDataUnsafe?.user?.id;
      if (!chatId) throw new Error('Не удалось определить chat_id пользователя');

      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      if (!response.ok) throw new Error('Ошибка отправки сообщения');

      navigate("/success");
    } catch (error) {
      setShowError(true);
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#23232b] via-[#18191d] to-black">
      <div className="max-w-xl mx-auto py-14 px-4 text-white">
        <h1
          className="font-bold mb-2 uppercase text-center text-2xl tracking-[0.25em] text-white"
          style={{
            textShadow: "rgba(0, 0, 0) 0px 5px 45px, rgb(0, 0, 0) 0px 1px 9px",
            fontFamily: "'Montserrat', 'Arial', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.25em",
            WebkitTextStroke: "2px #fff",
            color: "transparent",
          }}
        >
          {data.title}
        </h1>
        <div
          className="text-gray-400 mb-6 text-lg text-center"
          style={{
            textShadow: "0 4px 32px rgba(0,0,0,0.85)"
          }}
        >
          {data.subtitle}
        </div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          {data.questions.map((q, idx) => (
            <Input
              key={idx}
              label={q}
              name={`q${idx}`}
              placeholder="Ваш ответ..."
              required
              type="text"
            />
          ))}
          {/* <button
            type="submit"
            className="mt-4 mb-4 w-full rounded-xl bg-green-500 hover:bg-green-600 text-white py-3 font-semibold text-lg transition"
          >
            Отправить
          </button> */}
        </form>
        {showError && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(0,0,0,0.3)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
                color: "#000",
              }}
            >
              <p>Пожалуйста, заполните все поля или попробуйте позже.</p>
              <button onClick={() => setShowError(false)}>Закрыть</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}