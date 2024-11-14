// import Rushikeshtupekar from "./BlogsHero/Images/Rushikeshtupekar.jpg";
// import LokeshJadhav from "./BlogsHero/Images/LokeshJadhav.jpeg";
// import sneha from "./BlogsHero/Images/sneha.png";
// import AaryanGiri from "./BlogsHero/Images/AaryanGiri.png";
// import AshishAarya from "./BlogsHero/Images/AshishAarya.png";
// import BhushanDeshkar from "./BlogsHero/Images/BhushanDeshkar.png";
// import MilindPatil from "./BlogsHero/Images/MilindPatil.png";
// import SushilShelar from "./BlogsHero/Images/SushilShelar.png";


const students = [
  {
    id: 1,
    // image: Rushikeshtupekar,
    name: "Rushikesh Tupekar",
    role: "AR Associates",
    course: "AR Caller/RCM",
    company: "AGS healthcare pvt Ltd",
    package: "4.5 LPA",
    achievements: "Top Performer",
    skills: "React, Node.js",
    Q1: "Ram Dharma’s Success Story: ",
    feedback1:
      "From Graduate to Full-Time Developer Ram Dharma, a 2023 Computer Science graduate, joined NexusCTC's Placement Guaranteed Program with a year gap in his career journey. His story is a testament to the success that this program can achieve. Ram has now secured a full-time position with a top company, and his journey is one worth listening to. Here, he shares his experience with the NexusCTC program and tips for standing out as a fresher in today’s competitive market.",
    detail:
      "Join the NexusCTC Placement Guaranteed Program and become the next success story like Ram, Sham, or Ramesh! Get a job guarantee with CTCs up to 25 LPA by visiting /placement-guarantee-program/.",
    Q2: "Facing Job Market Challenges as a Fresher: ",
    feedback2:
      "Ram’s Experience Like many fresh graduates, Ram encountered hurdles in finding off-campus job opportunities. The competition was fierce, and companies were hesitant to hire freshers without hands-on experience. Despite multiple applications, he often found himself receiving no responses, which made him realize the importance of specialized programs like NexusCTC's Placement Guaranteed Course.",
    Q3: "Program Highlights:",
    feedback3:
      "Flexibility, Practical Learning, and Real Results One of the standout features of NexusCTC’s program for Ram was its flexibility and practicality. Unlike traditional courses, the program allowed Ram to dive into real-world projects that simulated industry scenarios, helping him sharpen his skills without feeling restricted by rigid academic structures. The course was also highly affordable and concise, making it accessible for fresh graduates.",
    Q4: "Final Evaluation and Landing a Job",
    feedback4:
      "Ram recalls how the final assessment closely aligned with the real-life projects they had worked on, which eliminated the need for additional stress or research. This streamlined process allowed him to smoothly transition from learning to landing interviews, which ultimately led to his job offer after just a few rounds of interviews.",
    Q5: "How was your overall experience?",
    feedback5:
      "Ram’s overall experience with NexusCTC was highly positive. The program’s focus on practical learning, flexibility, and affordability helped him overcome challenges as a fresher. The course was instrumental in landing him a role at Devcon Software with a package of 10 LPA.",
  },

  // Data for Student 2: Sham Sharma
  {
    id: 2,
    // image: LokeshJadhav,
    name: "Lokesh Jadhav",
    role: "AR Associates",
    course: "AR Caller/RCM",
    company: "Access Healthcare",
    package: "3 LPA",
    achievements: "Best Project Award",
    skills: "JavaScript, CSS",
    Q1: "Sham Sharma’s Placement Success: ",
    feedback1:
      "The Practical Approach of NexusCTC Sham Sharma, another success story from NexusCTC’s Placement Guaranteed Program, shares how the program helped him bridge the gap between education and employment. Sham, also a 2023 graduate with a gap year, found that practical projects and dedicated mentorship made all the difference in securing a job.",
    detail:
      "Join the NexusCTC Placement Guaranteed Program and become the next success story like Ram, Sham, or Ramesh! Get a job guarantee with CTCs up to 25 LPA by visiting /placement-guarantee-program/.",
    Q2: "Navigating the Competitive Job Market: ",
    feedback2:
      "Sham’s Insights For Sham, the toughest challenge was breaking through the initial barrier of lack of experience. Many companies were not willing to invest time in training fresh graduates, which made it difficult for him to stand out. NexusCTC’s program not only provided the necessary technical skills but also interview preparation that helped Sham present himself confidently in job interviews.",
    Q3: "Affordability and Quality: ",
    feedback3:
      "What Sham Appreciated the Most Sham found NexusCTC’s program to be incredibly affordable while offering quality education. The hands-on projects, focused mentorship, and the structured learning path allowed him to excel at interviews and ultimately secure a job in a highly competitive market.",
    Q4: "How did NexusCTC help you in interview preparation?",
    feedback4:
      "The mock interview sessions and resume-building tips helped Sham present himself more confidently during interviews. He felt well-prepared and able to handle even challenging interview questions.",
    Q5: "What would you say to future students?",
    feedback5:
      "Sham encourages new graduates to join the NexusCTC program for its practical training and placement guarantee, which played a crucial role in securing his role at Tech Solutions.",
  },

  // Data for Student 3: Ramesh Bailal
  {
    id: 3,
    // image:AshishAarya,
    name: "Ashish Aarya",
    role: "Senior Analyst",
    course: "AR Caller/RCM",
    company: "Access Healthcare",
    package: "8.3 LPA",
    achievements: "Certificate of Excellence",
    skills: "Excel , Power BI ",
    Q1: "Ramesh Bailal’s Feedback:",
    feedback1:
      "Achieving Career Success with NexusCTC Ramesh Bailal is a shining example of how the NexusCTC Placement Guaranteed Program can transform a fresher into a confident and capable professional. As a 2023 CSE graduate with a one-year gap, Ramesh was skeptical at first, but his experience with NexusCTC turned out to be a game-changer. Today, Ramesh is thriving in his new role, thanks to the skills and confidence gained during the program.",
    detail:
      "Join the NexusCTC Placement Guaranteed Program and become the next success story like Ram, Sham, or Ramesh! Get a job guarantee with CTCs up to 25 LPA by visiting /placement-guarantee-program/.",
    Q2: "Tackling the Freshers’ Dilemma: ",
    feedback2:
      "Ramesh’s Journey The job market is notoriously challenging for freshers, and Ramesh was no exception. After applying to numerous companies with no success, he realized that NexusCTC’s placement-focused approach was the key to breaking into the industry. With project-based learning and a focus on practical applications, Ramesh was able to impress employers during interviews.",
    Q3: "A Smooth Transition to Employment",
    feedback3:
      "Ramesh highlighted that the placement preparation was one of the most valuable aspects of the course. The mock interviews, resume-building sessions, and one-on-one mentorship helped him refine his skills and navigate the hiring process smoothly. The end result was a job offer that met his expectations, allowing him to begin his career on a high note.",
    Q4: "How did NexusCTC prepare you for real-world challenges?",
    feedback4:
      "The real-world projects and practical learning approach helped Ramesh feel prepared for his job role, where he could apply his skills immediately.",
    Q5: "What advice would you give to students?",
    feedback5:
      "Ramesh recommends staying dedicated, taking every project seriously, and using NexusCTC’s resources to the fullest to achieve career success.",
  },

  // Student 4: Priya Agarwal
  {
    id: 4,
    // image:AaryanGiri,
    name: "Aaryan Giri",
    role: "AR Associates",
    course: "AR Caller/RCM",
    company: "Access Healthcare",
    package: "3 LPA",
    achievements: "Employee of the Month",
    skills: "React, CSS, HTML",
    Q1: "Priya Agarwal’s Success Journey: ",
    feedback1:
      "Priya Agarwal, a 2022 graduate, secured a role at TechWave after completing NexusCTC’s Placement Program. Her journey is a testament to perseverance and the value of practical learning. She emphasizes how the program helped her stand out in a competitive job market by offering real-world projects and industry-relevant training. With hands-on coding experience and personalized mentorship, Priya was able to build an impressive portfolio that caught the attention of leading tech companies like TechWave.",
    detail:
      "Join the NexusCTC Placement Guaranteed Program to be the next success story with top packages in leading companies. Visit /placement-guarantee-program/ for more details.",
    Q2: "Facing Challenges as a Female Coder: ",
    feedback2:
      "Priya shares that, as a woman in tech, she faced unique challenges in the job market, such as being underrepresented in certain tech roles. NexusCTC provided her with a safe and encouraging environment to hone her skills. The mentorship from experienced female professionals and exposure to tech events helped her navigate these challenges, enabling her to compete and excel in her role at TechWave.",
    Q3: "How NexusCTC Boosted Confidence",
    feedback3:
      "Priya says that the mock interviews and feedback were crucial in building her confidence. She appreciated how NexusCTC structured its placement preparation program with mock interviews led by industry professionals. These sessions helped her improve not only her technical knowledge but also her soft skills like communication and problem-solving, which proved invaluable during the actual interviews at TechWave.",
    Q4: "How did NexusCTC prepare you for the job?",
    feedback4:
      "NexusCTC’s focus on real-world projects and personalized mentorship played a key role in preparing Priya for her role in the industry. She particularly appreciated how the curriculum was aligned with current industry demands, giving her a competitive edge. By working on live projects and receiving individualized feedback, Priya felt well-equipped to handle complex development tasks when she joined TechWave.",
    Q5: "What would you tell future students?",
    feedback5:
      "Priya encourages women in tech to join NexusCTC for its supportive environment and excellent placement opportunities. She highlights how the structured training, combined with access to a strong professional network, can empower women to overcome barriers in the tech industry. For future students, she advises them to take full advantage of the resources offered by NexusCTC, including mentorship, career guidance, and hands-on practice.",
  },

  // Student 5: Arjun Mehta
  {
    id: 5,
    // image:BhushanDeshkar,
    name: "Bhushan Deshkar",
    role: "AR Associates",
    course: "AR Caller/RCM",
    company: "Credence Resource Management Pvt Ltd",
    package: "2.8 LPA",
    achievements: "Best Analyst Award",
    skills: "Python, SQL",
    Q1: "Arjun Mehta’s Story of Career Transition:",
    feedback1:
      "Arjun Mehta, a BSc in Mathematics graduate, transitioned into the field of data analytics through NexusCTC’s Data Science program. Today, he works as a Data Analyst at DataCorp, earning a package of 14 LPA. He credits NexusCTC with providing a robust foundation in data analysis, statistical modeling, and visualization techniques, which allowed him to leverage his mathematical background effectively in the tech industry.",
    detail:
      "Discover your career potential by joining NexusCTC’s Placement Guaranteed Program. Learn more at /placement-guarantee-program/.",
    Q2: "The Importance of Specialized Training:",
    feedback2:
      "Arjun shares how NexusCTC’s hands-on approach in Data Science projects gave him the practical skills needed to excel in job interviews. He emphasizes the value of working on real datasets, which not only enhanced his technical skills in Python and SQL but also improved his problem-solving abilities, making him more appealing to employers.",
    Q3: "What role did mock interviews play in your success?",
    feedback3:
      "The mock interview sessions were instrumental in helping Arjun present himself as a strong candidate. He felt confident and well-prepared. The detailed feedback from industry experts helped him refine his responses and improve his presentation skills, enabling him to tackle difficult interview questions with ease.",
    Q4: "What would you recommend to students joining NexusCTC?",
    feedback4:
      "Arjun advises future students to focus on practical projects and actively engage with mentorship to get the most out of the program. He highlights the importance of networking with peers and instructors, which can lead to valuable connections and job opportunities in the industry.",
    Q5: "Overall Experience:",
    feedback5:
      "Arjun had an overwhelmingly positive experience and recommends the course to anyone looking to transition into a technical career. He appreciates the supportive environment at NexusCTC, which fosters continuous learning and growth, ensuring that graduates are well-equipped to succeed in the competitive job market.",
  },

  {
    id: 6,
    name: "Miss Sneha",
    // image: sneha,
    role: "Software Testing",
    company: "TechCorp",
    package: "6 LPA",
    achievements: "Best Analyst Award",
    skills: "Python, SQL",
    course: "Full Stack Web Development",
    feedback:
      "The course was excellent and helped me secure a job in a top tech company. It offered an incredible blend of theory and hands-on learning that I found invaluable.",
    Q1: "How did the course help you in your career?",
    feedback1:
      "The course provided me with the right skills in JavaScript, React, and Node.js, which are highly demanded in the industry. The structured curriculum not only covered fundamental concepts but also delved into advanced topics like RESTful APIs and responsive design, which prepared me for the diverse challenges in web development. I was able to build a project that I showcased in my interviews, significantly boosting my confidence.",
    detail:
      "The projects were very practical and closely resembled real-world tasks, allowing me to build a solid portfolio that impressed potential employers. I completed a capstone project that simulated a real-world application, which further enriched my learning experience.",
    Q2: "What was the most valuable part of the course?",
    feedback2:
      "The hands-on projects were the most valuable. They gave me confidence in building real applications. Collaborating with classmates on group projects fostered teamwork and improved my communication skills, both essential for working in tech. These experiences made me feel well-prepared to join TechCorp, where collaboration is key to our success.",
    Q3: "How was your experience with the instructors?",
    feedback3:
      "The instructors were highly knowledgeable and supportive throughout the learning process. They were not only experts in their fields but also approachable and genuinely invested in our success. Their constructive feedback during assignments helped me refine my coding skills and learn best practices.",
    Q4: "What advice would you give to future students?",
    feedback4:
      "Stay consistent, practice a lot, and don’t hesitate to ask for help when stuck. Additionally, I recommend participating in extra workshops or hackathons offered by NexusCTC, as these experiences are invaluable for networking and practical learning. Engaging with industry professionals through guest lectures was also enlightening and motivating.",
    Q5: "Would you recommend this course to others?",
    feedback5:
      "Absolutely! This course transformed my career and gave me a competitive edge. The strong emphasis on real-world applications, coupled with excellent mentorship, ensured I was job-ready. I feel confident tackling any challenges in my job at TechCorp, and I owe a significant part of my success to the NexusCTC program. I would encourage anyone considering a tech career to join this course and take full advantage of the resources available.",
  },
  {
    id: 7,
    name: "Sushil Shelar",
    // image:SushilShelar,
    role: "Software Testing Engineer",
    company: "Data Insights",
    package: "5 LPA",
    achievements: "Software Testing Engineer 3 Years of Experience with MNC",
    skills: "Python, SQL",
    course: "Data Science & Analytics",
    feedback:
      "The course was challenging but rewarding. It gave me a deep understanding of data analytics tools and the confidence to tackle complex data problems in my job.",
    Q1: "How did the course help you in your career?",
    feedback1:
      "It helped me master data visualization and analysis tools like Python, SQL, and Tableau. The skills I gained allowed me to effectively interpret and present data, making significant contributions to my team at Data Insights. One of my first projects involved analyzing customer data to improve marketing strategies, which was well-received by management.",
    detail:
      "The case studies were particularly helpful in understanding how data analytics is used in the real world. They provided context and relevance to the theory we learned, allowing me to connect the dots and apply my knowledge effectively during my internship, which ultimately led to my current role.",
    Q2: "What was the most valuable part of the course?",
    feedback2:
      "The combination of theory and practical applications helped me understand data science concepts in depth. Each module included hands-on exercises that reinforced the learning material, ensuring I could confidently apply what I learned in my job. The final project required us to analyze a dataset and present our findings, which was a great way to showcase our skills to potential employers.",
    Q3: "How was your experience with the instructors?",
    feedback3:
      "The instructors were approachable and made complex topics easier to grasp. They encouraged questions and discussions, creating a supportive learning environment. Their real-world experience added immense value to the course, as they shared insights and practical tips from their careers that I still apply today.",
    Q4: "What advice would you give to future students?",
    feedback4:
      "Focus on understanding the basics thoroughly before diving into advanced topics. Don’t rush through the course; take your time to grasp each concept fully. I also recommend collaborating with classmates on projects, as this fosters a deeper understanding and helps you learn from different perspectives. Networking with peers can open doors to job opportunities as well.",
    Q5: "Would you recommend this course to others?",
    feedback5:
      "Definitely! It’s perfect for anyone looking to start or advance their career in data science. The course equipped me with the necessary tools and knowledge, and I feel prepared to tackle any challenge that comes my way. I often share my experience with friends and colleagues who are interested in data science, and I urge them to consider NexusCTC for their training.",
  },
  {
    id: 8,
    name: "Milind Patil",
    // image:MilindPatil,
    role: "Software Quality Analyst",
    company: "FutureTech",
    package: "4.5 LPA",
    achievements: "Best Analyst Award",
    skills: "Python, SQL",
    course: "Software Testing",
    feedback:
      "The AI & ML course was a game-changer. It gave me the skills to work on cutting-edge technologies and prepared me to contribute meaningfully to my projects at FutureTech.",
    Q1: "How did the course help you in your career?",
    feedback1:
      "It equipped me with machine learning algorithms, neural networks, and deep learning skills. I was able to leverage these skills to develop predictive models that improved decision-making processes at my company. The hands-on approach of the course allowed me to experiment with real datasets, which was invaluable in my current role.",
    detail:
      "The course also focused on practical AI applications, which prepared me for industry challenges. We worked on projects that simulated real-world problems, giving me a taste of the challenges I would face in a corporate environment and teaching me how to approach solutions effectively.",
    Q2: "What was the most valuable part of the course?",
    feedback2:
      "The capstone project was the highlight, allowing me to apply what I had learned in a real-world scenario. I developed an AI-based chatbot for customer support as my capstone, which is now implemented at FutureTech and has significantly reduced response times for customer inquiries.",
    Q3: "How was your experience with the instructors?",
    feedback3:
      "The instructors were industry experts with practical knowledge, which made a big difference. Their insights into the latest trends and technologies were incredibly helpful. They encouraged us to ask questions and engage in discussions, making the learning process interactive and enjoyable.",
    Q4: "What advice would you give to future students?",
    feedback4:
      "Don’t be afraid to fail. Experiment with different projects, and you’ll learn more from mistakes. I often tried implementing algorithms in ways that didn’t work at first, but those failures taught me more than successes. Embrace challenges as learning opportunities, and don’t hesitate to seek help from peers or instructors.",
    Q5: "Would you recommend this course to others?",
    feedback5:
      "Without a doubt. This course opens up doors to many opportunities in AI development. The skills I gained are highly sought after in the job market, and I feel confident pursuing a career in this dynamic field. I often recommend it to my friends and colleagues looking to make a mark in AI.",
  },
];

export default students;
