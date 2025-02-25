import GamerDevOpsProfileCard from "./gamer-devops-profile-card"
import { Github, Gamepad, DiscIcon as Discord, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <GamerDevOpsProfileCard
        name="49jull"
        avatar="https://cdn.discordapp.com/avatars/885521322514468896/ce1cdd3128738725f395dd27d9e6ea59.webp?size=100"
        role="gamer and website manager"
        country="Netherlands"
        mainGame="Emergency Hamburg"
        devopsSkill="PSE"
        links={[
          { url: "https://github.com/49jull", label: "GitHub", icon: Github },
          { url: "https://www.roblox.com/users/1103921846/profile", label: "Roblox", icon: Gamepad },
          { url: "https://discordapp.com/users/885521322514468896", label: "Discord", icon: Discord },
          { url: "https://guns.lol/jull", label: "Guns", icon: Globe },
        ]}
      />
    </div>
  )
}

