"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const sliderImages = [
  "/img1.jpeg",
  "/img2.jpeg",
  "/img3.jpeg",
  "/img4.jpeg",
  "/img5.jpeg",
  "/img6.jpeg",
  "/img7.jpeg",
  "/img8.jpeg",
  "/img9.jpeg",
  "/img10.jpeg",
  "/img11.jpeg",
  "/img12.jpeg",
  "/img13.jpeg",
  "/img14.jpeg",
  "/img15.jpeg",
  "/img16.jpeg",
  "/img17.jpeg",
]

const cardData = [
  {
    img: "/card1.jpeg",
    msg: "Happy Birthday Manavi! You’ve unofficially become our third roommate,and honestly,I wouldn’t have it any other way. Your sweet,caring,supportive (and slightly crazy) energy lights up the room.You’re one of those people who made my hostel life bearable..Lots of love to you.Never change! 🫶🏻Monodeepa"
  },
  {
    img: "/card2.jpeg",
    msg: "Manavi, even with your occasional dramatic moments – and we all know how you can be!  our shared moments has given us some truly amazing friendships. I still remember that first tearful meeting with you! Look at us now – our room and hostel mess has practically become our own little gossip central, filled with so many memories we’ve made together. It’s these moments, big and small, that make our time here so special. Here’s to making many more with you, Manavi!❤️-Kuhoo"
  },
  {
    img: "/card3.jpeg",
    msg: "Met you on day one and you’ve been part of every core memory since. College just wouldn’t be the same without you. Happy Birthday Manavi🤍Love, Nishi"
  },
  {
    img: "/card4.jpeg",
    msg: "Happyyyy birthdayy you annoying human!Another year older, but still just as loud, dramatic, and irritating — I wouldn’t have it any other way. From the very first year of college till now, we’ve been stuck in the same hostel, with our rooms just a wall apart and somehow, in between all the endless bickering and teasing, you became one of the most special people in my life.We fight over literally everything and half the time, even I forget what we were arguing about. But honestly, those little fights mean the world to me. They remind me so much of how I fight with my sister — that comfort, that closeness, that “I’ll annoy you to death but still love you endlessly” kind of vibe. That’s what you’ve become to me not just a friend, but family.You’re one of the very few genuine people I’ve met in college. And I love you for that. I’ve seen your caring side, your crazy side, your hyper moods, and your emotional moments and I honestly feel lucky to know all those sides of you.So, here’s to you: to more chaos, more crazy fights, more hugging-it-out-after, and more memories that I’ll carry forever.Happy Birthday, you crazy, wonderful human. I love you very, very muchhh even if I don’t say it every day. But also… tu meri fan hai, remember that. Always.My fan,Krishna"
  },
  {
    img: "/card5.jpeg",
    msg: "Happy Birthday, Sweety I honestly don’t even know where to start, because there’s so much I want to say. You have  brought so much happiness and warmth into my life, and I’m so grateful to have you by my side.You deserve all the love, laughter, and magic today and every day. I hope your birthday is as beautiful and special as you are, just stay the same and always remember you sre the best.Sadly I will not be there to celebrate your birthday physically with you but okay...Once again Happy Birthday sweetest.Aseem"
  },
  {
    img: "/card6.jpeg",
    msg: "Another year old but imagine being mentally stuck at 8. It’s crazy how you manage to forget everything but being overly dramatic and your chillana/rr. You might be air-headed, Mannu but that doesn't change the fact that you're dumb asf and you have 0 brains. Regardless of your lack of common sense and your world class ability to zone out , you’re still one of my favorite idiots. Life would be way boring for me without calling you out for some random bs you pulled, and I love you and appreciate you for it (even if I question your 2 brain cells everyday). Well this picture sums up the relationship we have pretty well. (I really want to call you a retard but being how subtle I am,  I didn't)-Aapki sabse bachane wala (Aman)"
  },
  {
    img: "/card7.jpeg",
    msg: "Happiest birthday bongniii!!💗🥳Hope tu mazze kr rhii hogiii ghar par. Achhe se khao, piyoo(gold advance bhi kbhi kbhi pee lena🤣) .... missing your gussa wla face jo tu bnate rhti..and itni zor wli hassi jisse pura class sunn le🙈!!Bhavya"
  },
  {
    img: "/card8.jpeg",
    msg: "The butterfly effect is the idea that small causes can have large effects. Manavi Bangani i still remember the day i met you. I thought you were that senior who is begging her roommate to let her enter the room. And when you asked me what time the mess will start i figured out you are a freshie just like me. Over these two years together we figured out hostel life whether it was exams, satisfying midnight cravings , or just the normal hostel chaos you have been with me since day 1 . I don’t know how i would have managed staying here without you , whose door i would knock at 2 am when i am having a mental breakdown or who would I fight with, who would take care of me when I am drunk.When we fight you give me migraines and i know at times i am not easy to deal with I bring chaos but each time you have been there for me. ( we are so close the wardens even think you are my roommate) so baingan here’s to you growing up 🥂( at-least a virtual cheers cause you wouldn’t go drinking with me as both of us cannot be drunk at the same time) For you ,a thousand times over ( do check it’s meaning)Love ,Morris"
  },
  {
    img: "/card9.jpeg",
    msg: "Happy happy birthday manaviii🫶🏻 can’t believe you’re 20 wow… time really flies. It seems like just yesterday we used to go aise morning walks pe and you used to run away dogs se😂. I can’t even begin to tell you how important you are to me. Besides I’m sure you already know. Don’t know how I’d go through this life shit without you there with me🫶🏻🥹. Love you so so much. Mere saath trip still due, reminding. Happy birthday againnn"
  }
]

export default function RealSurprise() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 px-4 py-10 flex flex-col items-center">
      {/* Slider */}
      <motion.div
        className="flex overflow-x-auto gap-6 scrollbar-hide w-full max-w-5xl px-4 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {sliderImages.map((src, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={300}
              height={300}
              className="rounded-2xl object-cover w-[300px] h-[300px]"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Cards */}
      {/* <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {cardData.map((card, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-3xl shadow-lg border-2 border-pink-200 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <Image
              src={card.img}
              alt={`Card ${i + 1}`}
              width={400}
              height={250}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-7 text-purple-600 text-sm sm:text-base leading-relaxed text-justify">
              {card.msg}
            </div>
          </motion.div>
        ))}
      </motion.div> */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {cardData.map((card, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-3xl shadow-lg border-2 border-pink-200 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <Image
              src={card.img}
              alt={`Card ${i + 1}`}
              width={400}
              height={250}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-7 text-purple-600 text-sm sm:text-base leading-relaxed text-justify">
              {card.msg}
            </div>
          </motion.div>
        ))}

        {/* Last special card */}
        <motion.div
          className="bg-white col-span-full rounded-3xl shadow-lg border-2 border-pink-200 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: cardData.length * 0.2 }}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-4">
            <Image src="/card-2.jpeg" alt="extra1" width={300} height={250} className="rounded-xl object-cover h-[250px] w-[250px]" />
            <Image src="/card-1.jpeg" alt="extra2" width={300} height={250} className="rounded-xl object-cover h-[250px] w-[250px]" />
            <Image src="/card-3.jpeg" alt="extra3" width={300} height={250} className="rounded-xl object-cover h-[250px] w-[250px]" />
          </div>
          <div className="p-7 text-purple-600 text-sm sm:text-base leading-relaxed text-justify">
            Happy Birthday, You Adorable Menace! 🎉💖
To the cutest, slightly dumb (but in the most lovable way), sometimes-annoying, always-there-for-me human—
Happy freakin’ birthday!!

From laughing at the dumbest jokes to being my rock when life gets messy, you’ve been there through it all. You drive me crazy sometimes, but I honestly wouldn’t trade a single second with you. You’re more than just my best friend… you’re my safe space, my daily dose of chaos, and honestly, the reason I smile a little more every day.
So today’s all about you—your weirdness, your warmth, your loyalty, and that smile that could make the world stop.
Stay cute. Stay annoying. Stay you. 💕
I hope you like this small gift I made ik it’s not much …
These were the only 3 pics I had lol Usme mein I took one of the pic u made lol 😂 .
Happy Birthday, idiot. Lots of love 🎂💫
-Shrey
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}