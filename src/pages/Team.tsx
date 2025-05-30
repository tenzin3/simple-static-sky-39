import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

const teamMembers = [
  {
    id: 1,
    name: 'Tsultrim Dorjee',
    role: 'Founder & President, Dharamshala',
    message: 'The feeling of winning after a hardfought battle for life is always euphoric and overwhelming. Cancer is curable if detected early. I would like to thank the team at Tibetan Cancer Society for your brave and selfless efforts. I’m truly honored to have been a part of it.',
    image: '/data/team-images/Tsultrim Dorjee.jpg'
  },
  {
    id: 2,
    name: 'Sonam Dhargye',
    role: 'Ex-TCS Manager, Nepal',
    message: 'I wanted to express my gratitude for the opportunities I had while working with the Tibetan Cancer Society (TCS). I will always cherish the experiences and lessons learned. As a former manager at TCS, I witnessed the organization\'s remarkable work in providing cancer care and support to the Tibetan community at the grassroots level. Their dedication to improving health outcomes and promoting awareness about cancer is truly commendable. They provide accessible cancer treatment and care at the Compassion Home in Delhi. TCS promotes cancer awareness and educates the Tibetan community by organizing free health camps in India and Nepal. Most importantly, they support patients and their families as if they were their own, which further empowers our society. As a grassroots NGO, the Tibetan Cancer Society does a wonderful job with very limited resources. My personal favorite program is "Meals for Invisible," which provides nutritious meals to poor and needy people around Delhi. I must thank those who selflessly donate to this program; your money is used solely for the benefit of the poor. Thank you, Tibetan Cancer Society, for your compassionate work and commitment to cancer care. Your efforts are making a real difference in our society',
    image: '/data/team-images/Sonam Dhargye.png'
  },
  {
    id: 3,
    name: 'Tenzin Dekyong',
    role: 'Ex-Staff Nurse/Volunteer, India',
    message: 'As we celebrate the 10th anniversary of the Tibetan Cancer Society, I feel incredibly grateful for the opportunity to share a part of my journey with this inspiring organization. I joined TCS as a volunteer nurse on October 15, 2022, during a health camp organized in Nepal. Though it lasted just 15 days, those two weeks left a lasting impact on me. We visited four Tibetan settlements in Pokhara, reaching out to people of all ages—children, elders, monks, and nuns—and extended our care to Himalayan communities in Kathmandu as well. The work TCS does in Nepal is truly remarkable. From raising awareness about cancer to screening for serious conditions like H. pylori (which is linked to stomach cancer), they’re not just providing medical assistance—they’re offering hope. The emotional support they give is just as vital as the treatment itself. For me, this experience was more than just a volunteer opportunity—it was deeply meaningful. I didn’t just grow in my nursing skills; I grew as a person. I learned so much about compassion, resilience, and the power of human connection. Being surrounded by such dedicated and kind-hearted people reminded me why I chose this path in the first place. I’m so proud to have been even a small part of the work TCS does. It’s something I’ll carry with me always.',
    image: '/data/team-images/Tenzin Dekyong.png'
  },
  {
    id: 4,
    name: 'Yangkey',
    role: 'Ex-Staff Nurse, Canada',
    message: 'I am writing this letter to express my heartfelt reflections on my journey with the Tibetan Cancer Society, where I had the honor to serve from 2020 to 2023. Those three years were among the most memorable moments of my life, deeply moving and shaping me emotionally, spiritually, mentally, and personally. Through my work, I came to understand the true essence of compassion and the strength of the human spirit. I was fortunate to support individuals and families during their most vulnerable moments, and each interaction left a lasting impact on me. It was heartbreaking when disease affected people in unimaginable ways, but this beautiful organization chose to work tirelessly and serve those in need. I learned that healing goes beyond medicine—a comforting word, a warm presence, or simply holding space for someone in pain can create powerful impacts. I also came to understand the importance of awareness, advocacy, and early detection in our community, especially among vulnerable and underserved populations. Working with the Tibetan Cancer Society wasn’t just about service—it was about humanity, healing, and heart. It taught me how to listen with empathy, serve with sincerity, and love without expectations. I am forever grateful for this journey and the people who became part of it',
    image: '/data/team-images/Yangkey.png'
  },
  {
    id: 5,
    name: 'Dechen Lhamo',
    role: 'TCS Volunteer Nurse, Canada',
    message: 'I began my journey as a volunteer with this incredible NGO in 2020, right in the midst of the COVID-19 pandemic—a time when the need for compassion, solidarity, and community support was more urgent than ever. One of the first projects I was involved in was Meals for the Invisible—a deeply moving initiative where we distributed nutritious meals to destitute individuals who are often overlooked by society. Beyond that, I had the privilege of assisting patients with hospital admissions, taking part in health camps, and contributing to fundraising events aimed at supporting cancer treatment for those in need. Each experience, every story I encountered, and every interaction I had along the way taught me something valuable and expanded my understanding of empathy, resilience, and selfless service. When I first joined, the organization didn’t even have an ambulance. Today, we not only have a dedicated ambulance service but also a fully functioning community kitchen that serves hundreds of people. Witnessing this transformation has been profoundly inspiring and rewarding. Volunteering with this organization has truly been a journey of growth, compassion, and purpose. I feel deeply honored to be part of this mission, and I will always carry the lessons, stories, and memories with me as I continue to serve in whatever ways I can.',
    image: '/data/team-images/Dechen Lhamo.png'
  },
  {
    id: 6,
    name: 'Tenzin Chokey',
    role: 'TCS Volunteer Nurse, England',
    message: 'I take this as a great opportunity to express how grateful I still feel to have worked as a volunteer with TCS (Tibetan Cancer Society) for a period of two years, mainly assisting with health camps in the Northeast and the remote areas of Ladakh. I want to express my gratitude to the organization —starting from the lead, Tsultrim Dorjee, to all the staff associated with it. We were given a platform to give back to the community, and I believe we made the tiniest difference in the settlements I visited during those two years. We were also provided a safe space to work in. The effort that goes into organizing and operating the health camps is immense, but I have to say, Tsultrim Dorjee (Genla, as I call him) is truly commendable. As stressful as it sometimes gets, he has consistently shown why he is leading the organization. Thank you for your hard work, Genla. I carry such fond memories, and the peak moment was when we got to see Tibet just a few meters away—our Phayul. I will always be ever so indebted for that once-in-a-lifetime experience. I believe in the vision this organization holds and hope it continues to do such meaningful work.',
    image: '/data/team-images/Tenzin Chokey.png'
  },
  {
    id: 7,
    name: 'Chime Dolkar',
    role: 'Ex-Staff Nurse, Delhi',
    message: 'From January 2021 to September 2022, I served as a position of Head Nurse at the Tibetan Cancer Society (TCS), working diligently at the Compassion Home in Delhi. This period, encompassing the challenging times of the COVID-19 pandemic and its aftermath, was both demanding and profoundly rewarding. My responsibilities included providing comprehensive care to cancer patients, addressing their medical needs with professionalism and their emotional well-being with compassion. I played my role during medical consultations, ensuring seamless communication between patients and healthcare providers. Efficiently managing appointment schedules and patient records was crucial to maintaining smooth operations and facilitating timely treatments. During the peak of the COVID-19 crisis, I was an active member of the emergency response team, gaining invaluable experience in infection control protocols and patient care under pressure. Participating in various NGO-led programs further enhanced my knowledge in oncology care, infection prevention, and stress management techniques. This journey with TCS was a testament to the strength of the human spirit and the impact of dedicated healthcare. I was profoundly grateful for the opportunity to serve and grow within such a compassionate organization.',
    image: '/data/team-images/Chime Dolkar.png'
  },
  {
    id: 8,
    name: 'Tenzin Jigme',
    role: 'TCS Volunteer, Delhi',
    message: 'I want to take a moment to express my deep admiration and gratitude to the Tibetan Cancer Society on their 10th anniversary. Over the past decade, this incredible organization has dedicated itself to supporting individuals and families affected by cancer within the Tibetan community. Their unwavering compassion, tireless efforts, and commitment to those in need have made a profound difference in countless lives. I had the honor of volunteering with the Tibetan Cancer Society, and the experience was truly humbling. I witnessed firsthand the kindness, strength, and unity that define this organization. From raising awareness to providing financial assistance and emotional support, their work goes far beyond just medical aid—it’s about bringing hope and dignity to those who need it most. Congratulations on this important milestone. May the next decade bring even more healing, compassion, and positive impact. Here’s to the Tibetan Cancer Society and all the hearts behind it —thank you for being a beacon of light in the community.',
    image: '/data/team-images/Tenzin Jigme.png'
  }
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const handleCardClick = (member) => setSelectedMember(member);
  const handleCloseModal = () => setSelectedMember(null);

  return (
    <PageLayout>
      <section className="pt-2 pb-10 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleCardClick(member)}
              >
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for member details */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-10 relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-48 h-48 object-cover rounded-lg border shadow-md mb-6"
            />
            <h3 className="text-3xl font-bold mb-2">{selectedMember.name}</h3>
            <p className="text-primary font-semibold mb-4 text-lg">{selectedMember.role}</p>
            <p className="text-muted-foreground whitespace-pre-line text-base text-center">{selectedMember.message}</p>
          </div>
        </div>
      )}

    </PageLayout>
  );
};

export default Team;
