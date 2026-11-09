import { useEffect, useRef, useState } from 'react'
import '../styles/portraits.css'

const anilBiography = `District Governor Dr. Anil Gupta is a distinguished professional, successful entrepreneur, and dedicated Rotarian known for his compassion and empathy. He holds a bachelor's degree in Electronics and Communication Engineering and a master's degree in Management. An academic rank holder, he brings decades of global experience in senior roles across various industries. He has co-founded four organisations and continues to mentor several startups.

Dr. Gupta draws on lessons from workshops on 360-degree leadership, change management, Bullet Proof Leadership, Six Sigma, and programmes at the Global Institute of Management. He is respected for his communication, planning, organisational, analytical, problem-solving, and presentation skills. His strengths also include process implementation, industry and government relations, leadership, teamwork, counselling, time management, and multitasking.

His commitment to social causes is reflected in his involvement with Rotary International, particularly in RI Districts 3190 and 3191 in Bengaluru. As a charter member of Rotary Bangalore IT Corridor, he has contributed to Rotary Foundation programmes supporting polio eradication, health and hygiene, environmental conservation, literacy, and international fellowship.

He has led international Rotary Friendship Exchange programmes and managed Global Grant projects focused on comfort stations, glaucoma care, epilepsy prevention, dialysis support in Nepal, and breast cancer screening. He also participated in a Rotary Friendship Exchange programme to Central Canada and developed international fellowships to support Foundation projects.

Since 2009, Dr. Gupta has worked on Matching Grants and Global Grants, managing the process from application writing and project execution to stewardship and report submission. He has also served as a trainer in District 3190, conducting sessions on the Rotary Foundation for clubs and members.

His philanthropic work has earned him recognition within and outside Rotary, including the Compassionate Service Award, Outstanding President Award, District Service Award, and Rotary International Avenues of Service Citation. Dr. Gupta and his wife, Sangita, are Level 4 Major Donors. Their children, Pranav and Akanksha, are Paul Harris Fellows, making theirs a family of Paul Harris Fellows.

Dr. Gupta finds fulfilment in using his experience and knowledge to give back to society through Rotary and Rotary Foundation projects. These experiences have helped him develop skills that he continues to share through his time, service, and contributions to the Foundation. He believes that learning never stops and that Rotary offers opportunities to learn every day.`

const karthikBiography = `Karthik Kittu is a startup ecosystem architect, public policy professional, and social entrepreneur — a Past District Rotaract Representative, Past Rotary Club President, and currently the Regional Rotaract Youth Advisory Council Chairman for Zones 4, 5, 6, 7, and 8. A globally recognised Rotary leader, he has spent over 25 years building institutions, empowering youth, and driving innovation-led social impact.

Born in Hannover, Germany, Karthik began his schooling there before continuing his education in India, where he went on to earn degrees in science, management, psychology, and public policy. A lifelong learner driven by curiosity, service, and purpose, Karthik developed a passion for youth leadership in 2001 when he joined the Rotaract Club of SBM Jain College.

As Club President in 2003, he earned the district's Best President Award. He went on to lead Rotaract Bangalore South, and, in 2008–2009, served as District Rotaract Representative for RI District 3190, empowering youth through clubs, community programmes, and Rotary Youth Leadership Awards.

In 2011, with just eight members, he founded Rotaract South Asia MDIO, serving as Charter President and later as Chairman Emeritus until 2014. Today, the organisation spans eight countries and 44 Rotary districts, with over 120,000 members, making it one of the world's largest Rotaract multi-district organisations.

That same year, he represented India as a Rotary Foundation Cultural and Vocational Ambassador to the USA through the Group Study Exchange programme, becoming the first Indian Rotaractor in recent times to speak at the Rotary International Convention in New Orleans. He went on to address the Bangkok, Toronto, Hamburg, and Singapore Conventions. From 2016 to 2019, he served on the Rotary International Rotaract and Interact Committee as the first Indian Rotarian selected for this role and one of fewer than 100 leaders selected globally.

Karthik's service has earned him numerous accolades, including the Rotaract 'Service Above Self' Award in 2014, citations from RI Presidents for Outstanding Service, and global recognition as a Rotary thought leader and youth ambassador. He has inspired a generation of Rotaract leaders and social entrepreneurs across South Asia.

Beyond Rotary, Karthik has spent over two decades leading initiatives across startups, public policy, and digital innovation — from Infosys and KPMG to IIIT-Bangalore, the Karnataka Digital Economy Mission, Startup Karnataka, and IIIT-Dharwad, helping shape ecosystems and scale impact. He is the Founder and Chief Ecosystem Architect at Skillkraft. His expertise includes developing incubation and acceleration ecosystems, managing public, university, and consular relations, advocating for policy, and promoting entrepreneurship.

He has contributed to several major initiatives of the central and state governments, including the Karnataka Government's Regional Ecosystem for Technical Excellence, Namma Smaraka - Adopt a Monument Programme, and the National Incubator Capacity Development Programme, contributing to national incubator frameworks and leading the Startup Mahakumbh Incubator Pavilion. During COVID-19, he led the team that built the Technical Dashboard for the Karnataka Chief Minister's War Room on COVID-19.

Karthik has represented India at the White House, the Prime Minister's Office in Israel, the Commonwealth Youth Summit in Brunei, and as a Cultural Ambassador of India to Bali, Indonesia. He is a StartingBloc Fellow, a Paul Harris Fellow, an Executive Council Member of CII Young Indians, and a Fellow of the Royal Society of Arts, London.

As Co-founder and Honorary Secretary of Natanam Charitable Trust, he is preserving and modernising Indian performing arts through AI and digital innovation. He also co-authored OneTAC, a digital platform for tourism, art, and culture, and co-founded the Culkey Foundation to bridge the gap between local heritage preservation and global consciousness.

Karthik is married to Dr. Raksha Karthik, a dental surgeon and Bharatanatyam artist, and together they are raising their daughter, Sumeru, a curious and creative fifth-grader.

Karthik Kittu's life is a beacon of purpose — driving change at the intersection of youth leadership, social impact, and cultural innovation. Through his dedication, he continues to inspire others to build a better tomorrow.`

const vinayBiography = `Mr. Vinay Patil is an entrepreneur, leadership coach, and international speaker. He is the Founder and CEO of SKILLFIX, a learning and development organisation that provides training for multinational corporations, corporate organisations, MSMEs, industries, startups, and universities.

He is also the Founder and Managing Director of ROOTS EDUCATION, a project he established in 2019 to support and empower students in Grades 6 to 10 who need additional learning support. The organisation provides holistic coaching aligned with the National Education Policy 2020.

Vinay is a former national-level hockey player and an alumnus of Sainik School Bijapur, which is governed by the Ministry of Defence. He holds a degree in Electronics and Communication Engineering from JSS Academy of Technical Education, Bengaluru, and a master's degree in Political Science from IGNOU, New Delhi. He is also an alumnus of the Indian Institute of Management, Trichy, where he earned a degree in Leadership and Change Management.

Over a professional journey spanning 19 years, he has empowered more than seven lakh people and received numerous awards and accolades. These include the Young Entrepreneur Award from the National Foundation for Entrepreneurship Development, the Young Startup of the Year Award from the Public Relations Council of India, and the Teacher Excellence Award from Rotary International District 3191.

He has delivered guest lectures at institutions including IIT Bombay, NIT Warangal, NIT Durgapur, Christ University, and Bangalore University. He enjoys working with students and is actively involved with the Department of Education, Government of Karnataka. Over the past three years, he has empowered more than 40,000 students from rural and government schools and more than 2,000 faculty members.

He also serves as a member of the Board of Studies for the MBA programme at JSS University, Noida.

He strongly believes in the motto: "Life is like a candle; spread light to others before it melts."`

const swetlanaBiography = `Swetlana Goswami is a vibrant and multifaceted young leader whose journey is defined by resilience, creativity, and an unwavering commitment to service. A black belt in kung fu, she has represented Karnataka and India at national and international championships, reflecting her discipline, determination, and pursuit of excellence. An athlete at heart, she enjoys watching and playing a wide range of sports, embracing teamwork and healthy competition.

Alongside her sporting achievements, she is a passionate ballet dancer and a trained musician who plays several instruments, particularly the piano and keyboard. An avid singer, she finds joy in expressing herself through music and performance. A confident public speaker and an active participant in Model United Nations conferences, she thrives in environments that encourage diplomacy, critical thinking, and meaningful dialogue.

Currently studying in Grade 9 at Sophia High School, Bengaluru, Swetlana is known for her extroverted personality, infectious enthusiasm, and love of connecting with people. She enjoys building meaningful relationships and bringing people together through collaboration and shared purpose. Beyond leadership and service, she finds inspiration in photography, painting, reading, travelling, and exploring diverse cuisines. A lover of cinema and music, she enjoys films and songs in different languages and from different cultures, believing that great stories and melodies transcend boundaries.

Her leadership journey began when she served as Head Girl of her middle school council, where she developed a strong foundation in responsibility, teamwork, and servant leadership. Her Interact journey began in Grade 7, fuelled by a desire to serve, and soon grew into a path of impactful leadership.

She served as Vice President of the Interact Club of Sophia High School in 2024–2025, inspiring fellow Interactors through dedication, collaboration, and initiative. She later became Community Service Director for Interact District 3191 in 2025–2026, championing projects that strengthened the district's commitment to Service Above Self. She also chaired Aaroha, the Annual Interact District Conference, bringing together young changemakers from across the district to celebrate fellowship, innovation, and service.

As the first woman to serve as District Interact Representative of Rotary District 3191, Swetlana marks a historic milestone. Guided by compassion, purpose, and a belief in the power of youth leadership, she looks forward to leading the district into a new era of collaboration, inclusivity, and impactful service. She aims to empower every Interactor to dream fearlessly, lead with integrity, and leave a legacy of meaningful change.`

const profiles = [
  { id: 'anil-gupta', biography: anilBiography, photos: [{ src: 'images/team/anil-gupta.png', label: 'Standing portrait' }, { src: 'images/team/anil-gupta-2.jpeg', label: 'Seated portrait' }], photoClass: 'member-photo-anil', name: 'Rtn. Dr. (Hon.) Anil Gupta', role: 'District Governor', photo: 'images/team/anil-gupta.png', accent: 'var(--color-royal)', pdf: null },
  { id: 'karthik-kittu', biography: karthikBiography, photos: [{ src: 'images/team/karthik-kittu.png', label: 'Rotary event portrait' }, { src: 'images/team/karthik-kittu-2.jpeg', label: 'Outdoor portrait' }], photoClass: 'member-photo-karthik', name: 'PP. Rtn. Karthik V Kittu', role: 'District Youth Service Director', photo: 'images/team/karthik-kittu.png', accent: 'var(--color-gold)', pdf: null },
  { id: 'vinay-patil', biography: vinayBiography, photos: [{ src: 'images/team/vinay-patil.png', label: 'Portrait' }, { src: 'images/team/vinay-patil-2.png', label: 'Campus portrait' }], photoClass: 'member-photo-vinay', name: 'Rtn. Vinay Patil', role: 'District Interact Committee Chair', photo: 'images/team/vinay-patil.png', accent: 'var(--color-magenta)', pdf: null },
  { id: 'swetlana-goswami', biography: swetlanaBiography, photos: [{ src: 'images/team/swetlana-goswami-1.png', label: 'Portrait' }, { src: 'images/team/swetlana-goswami.png', label: 'Original portrait' }], photoClass: 'member-photo-swetlana', name: 'Itr. Swetlana Goswami', role: 'District Interact Representative', photo: 'images/team/swetlana-goswami-1.png', accent: 'var(--color-sky)', pdf: null },
]

export default function ProfileLibrary() {
  const dialogRef = useRef(null)
  const pointerOpenedRef = useRef(false)
  const [active, setActive] = useState(profiles[0])
  const [isOpen, setIsOpen] = useState(false)
  const [copyStatus, setCopyStatus] = useState('')

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    async function copyProfile() {
    try {
      await navigator.clipboard.writeText(active.biography)
      setCopyStatus('Profile copied')
    } catch {
      setCopyStatus('Could not copy. Select the profile text to copy it manually.')
    }
  }

  return () => { document.body.style.overflow = previousOverflow }
  }, [isOpen])

  function openProfile(profile, event) {
    pointerOpenedRef.current = event.detail > 0
    setCopyStatus('')
    setActive(profile)
    dialogRef.current.scrollTop = 0
    dialogRef.current.showModal()
    setIsOpen(true)
  }

  async function copyProfile() {
    try {
      await navigator.clipboard.writeText(active.biography)
      setCopyStatus('Profile copied')
    } catch {
      setCopyStatus('Could not copy. Select the profile text to copy it manually.')
    }
  }

  return (
    <>
      <div className="profile-grid">
        {profiles.map(profile => (
          <article key={profile.id} className="profile-card" style={{ '--profile-accent': profile.accent, '--profile-on-accent': profile.accent === 'var(--color-gold)' || profile.accent === 'var(--color-sky)' ? 'var(--color-navy)' : '#fff' }}>
            <div className="profile-cover"><img className={profile.photoClass} src={`${import.meta.env.BASE_URL}${profile.photo}`} alt={profile.name} loading="lazy" /><button type="button" className="profile-view-label" onClick={event => openProfile(profile, event)} aria-label={`View profile of ${profile.name}`} aria-haspopup="dialog" aria-controls="resource-profile-dialog">View Profile ↗</button></div>
            <div className="profile-card-heading">
              <div><h3>{profile.name}</h3><p>{profile.role}</p></div>

            </div>
          </article>
        ))}
      </div>
      <dialog id="resource-profile-dialog" ref={dialogRef} className={`profile-dialog${active.biography ? ' profile-dialog--biography' : ''}`} style={{ '--profile-accent': active.accent, '--profile-on-accent': active.accent === 'var(--color-gold)' || active.accent === 'var(--color-sky)' ? 'var(--color-navy)' : '#fff' }} aria-labelledby="resource-profile-title" onClose={() => {
        setIsOpen(false)
        if (pointerOpenedRef.current && document.activeElement?.classList.contains('profile-view-label')) {
          document.activeElement.blur()
        }
      }} onClick={event => {
        if (event.target !== event.currentTarget) return
        const bounds = event.currentTarget.getBoundingClientRect()
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialogRef.current.close()
      }}>
        <div className="profile-dialog-heading">
          <div><h2 id="resource-profile-title">{active.name}</h2><p>{active.role}</p></div>
          <button type="button" className="profile-close" onClick={() => dialogRef.current.close()} aria-label="Close profile" autoFocus>×</button>
        </div>
        <div className={`profile-dialog-body${active.biography ? ' profile-dialog-body--columns' : ''}`}>
          {active.biography ? <>
            <section className="profile-text-column" aria-label="Profile text">
            <div className="profile-text-toolbar">
              <h3>Profile</h3>
              <button type="button" className="btn btn-outline" onClick={copyProfile}>Copy Text</button>
            </div>
            <p className="profile-copy-status" role="status">{copyStatus}</p>
            <div className="profile-biography">{active.biography.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
            </section>
            <section className="profile-photo-library" aria-labelledby="profile-photos-title">
              <h3 id="profile-photos-title">Photos</h3>
              <div className="profile-photo-grid">{active.photos.map(photo => (
                <figure className="profile-photo-option" key={photo.src}>
                  <img src={`${import.meta.env.BASE_URL}${photo.src}`} alt={`${active.name} - ${photo.label}`} loading="lazy" />
                  <figcaption>

                    <a className="btn btn-outline" href={`${import.meta.env.BASE_URL}${photo.src}`} download={photo.src.split('/').pop()} aria-label={`Download ${photo.label.toLowerCase()} of ${active.name}`}>Download Photo ↓</a>
                  </figcaption>
                </figure>
              ))}</div>
            </section>
          </> : <>
            <img className="profile-dialog-photo" src={`${import.meta.env.BASE_URL}${active.photo}`} alt={active.name} />
            <div className="profile-actions">
              {active.pdf ? <a className="btn btn-outline" href={`${import.meta.env.BASE_URL}${active.pdf}`} target="_blank" rel="noopener noreferrer">View Profile PDF ↗</a> : <button className="btn btn-outline" type="button" disabled>Profile PDF · Coming soon</button>}
              <a className="btn btn-outline" href={`${import.meta.env.BASE_URL}${active.photo}`} download={`${active.id}.png`} aria-label={`Download photo of ${active.name}`}>Download Photo ↓</a>
            </div>
          </>}
        </div>
      </dialog>
    </>
  )
}