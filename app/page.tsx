import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Vanessa</h2>
        <p>Terça, 06 de agosto </p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua Busca" />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende o seu "
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <Card className="mt-6">
          <CardContent className="flex">
            <div className="flex flex-col gap-2 py-5">
              <Badge>Confirmado</Badge>
              <h3>Corte de Cabelo</h3>
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage />
                </Avatar>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
