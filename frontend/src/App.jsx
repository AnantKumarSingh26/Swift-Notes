import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import PerspectiveCarousel from './components/PerspectiveCarousel'

function App() {
  const [count, setCount] = useState(0)

  const initialCards = [
    {
      id: 1,
      dateTime: "15 Aug 2026 | 11:30 AM",
      title: "Project Q3 Marketing Strategy",
      objectives: [
        "Launch new social media campaign by sept 1.",
        "Analyze Q2 competitor performance.",
        "Finalize influencer contracts....."
      ],
      tags: ["#marketing", "#strategy"],
      createdAt: "15 Aug 2026 | 11:30 AM"
    },
    {
      id: 2,
      dateTime: "18 Aug 2026 | 02:15 PM",
      title: "Website Redesign Feedback",
      objectives: [
        "Review user testing session recordings.",
        "Fix the navigation spacing on mobile layouts.",
        "Optimize landing page images for faster loading."
      ],
      tags: ["#ui-ux", "#development"],
      createdAt: "18 Aug 2026 | 02:15 PM"
    },
    {
      id: 3,
      dateTime: "20 Aug 2026 | 09:00 AM",
      title: "Weekly Team Sync Notes",
      objectives: [
        "Align on product roadmap milestones.",
        "Assign QA tasks for the upcoming v2.4 sprint.",
        "Address backend latency issues reported by DevOps."
      ],
      tags: ["#management", "#meeting"],
      createdAt: "20 Aug 2026 | 08:45 AM"
    },
    {
      id: 4,
      dateTime: "22 Aug 2026 | 04:30 PM",
      title: "Content Calendar Q4 Planning",
      objectives: [
        "Draft 5 comprehensive tech blog outlines.",
        "Schedule email newsletters for October product announcements.",
        "Coordinate graphic assets with the design team."
      ],
      tags: ["#content", "#planning"],
      createdAt: "22 Aug 2026 | 04:30 PM"
    },
    {
      id: 5,
      dateTime: "25 Aug 2026 | 10:00 AM",
      title: "Security & Compliance Audit",
      objectives: [
        "Update dependencies to patch open vulnerability alerts.",
        "Review access logs for internal API keys.",
        "Prepare documentation for the annual security review."
      ],
      tags: ["#security", "#devops"],
      createdAt: "24 Aug 2026 | 11:15 AM"
    }
  ];


  return (
    <div className="main">
      {/* {initialCards.map((card) => (
        <Card key={card.id} cardData={card} />
      ))} */}
      <PerspectiveCarousel cardDataList={initialCards}/>

    </div>
  )
}

export default App
