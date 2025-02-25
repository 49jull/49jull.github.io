import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Gamepad2, Users, type LucideIcon } from "lucide-react"

interface LinkItem {
  url: string
  label: string
  icon: LucideIcon
}

interface GamerDevOpsProfileProps {
  name: string
  avatar: string
  role: string
  country: string
  mainGame: string
  devopsSkill: string
  links: LinkItem[]
}

export default function GamerDevOpsProfileCard({
  name,
  avatar,
  role,
  country,
  mainGame,
  devopsSkill,
  links,
}: GamerDevOpsProfileProps) {
  return (
    <Card className="w-full max-w-md bg-gradient-to-br from-sky-900 to-blue-800 text-white">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="h-20 w-20 border-2 border-sky-400">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-2xl font-bold">{name}</CardTitle>
          <p className="text-sm text-sky-300">{role}</p>
          <p className="text-xs text-sky-400 mt-1">{country}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-4 w-4 text-sky-400" />
              <span className="text-xs text-sky-300">Main Game</span>
            </div>
            <span className="text-sm font-semibold">{mainGame}</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-sky-400" />
              <span className="text-xs text-sky-300">Group</span>
            </div>
            <span className="text-sm font-semibold">{devopsSkill}</span>
          </div>
        </div>

        <Separator className="my-4 bg-sky-700" />

        <div className="grid grid-cols-2 gap-2">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <Button
                key={index}
                variant="outline"
                className="w-full text-sky-300 border-sky-500 hover:bg-sky-800"
                onClick={() => window.open(link.url, "_blank")}
              >
                <Icon className="mr-2 h-4 w-4" />
                {link.label}
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

