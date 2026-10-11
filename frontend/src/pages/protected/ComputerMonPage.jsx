import { Button } from "#components/ui/button";
import { Card,CardHeader,CardFooter, CardTitle,CardDescription,CardContent, CardAction } from "#components/ui/card";
import { Item,ItemDescription,ItemTitle,ItemContent, ItemMedia } from "#components/ui/item";
import { Progress } from "#components/ui/progress";
import { Monitor, Search, Wrench } from "lucide-react";
import { useState } from "react";

const dummyComputerRooms = [
  {
    id:1,
    name:"Computer Lab 1",
    roomcode:"CC1",
    selected: true
  },
  {
    id:2,
    name:"Computer Lab 2",
    roomcode:"CC2"
  },
  {
    id:3,
    name:"Computer Lab 3",
    roomcode:"CC3"
  },
  {
    id:4,
    name:"Mac Lab",
    roomcode:"CC4"
  }
]
const dummyCC1Computers = [
  { id: 1, name: "CC1-PC1", cpu: 34, memory: 67 },
  { id: 2, name: "CC1-PC2", cpu: 78, memory: 42 },
  { id: 3, name: "CC1-PC3", cpu: 12, memory: 85 },
  { id: 4, name: "CC1-PC4", cpu: 56, memory: 29 },
  { id: 5, name: "CC1-PC5", cpu: 91, memory: 73 },
  { id: 6, name: "CC1-PC6", cpu: 23, memory: 51 },
  { id: 7, name: "CC1-PC7", cpu: 67, memory: 38 },
  { id: 8, name: "CC1-PC8", cpu: 45, memory: 92 },
  { id: 9, name: "CC1-PC9", cpu: 8, memory: 64 },
  { id: 10, name: "CC1-PC10", cpu: 82, memory: 47 },
  { id: 11, name: "CC1-PC11", cpu: 39, memory: 76 },
  { id: 12, name: "CC1-PC12", cpu: 61, memory: 33 },
  { id: 13, name: "CC1-PC13", cpu: 17, memory: 88 },
  { id: 14, name: "CC1-PC14", cpu: 94, memory: 56 },
  { id: 15, name: "CC1-PC15", cpu: 48, memory: 21 },
  { id: 16, name: "CC1-PC16", cpu: 73, memory: 69 },
  { id: 17, name: "CC1-PC17", cpu: 26, memory: 44 },
  { id: 18, name: "CC1-PC18", cpu: 58, memory: 97 },
  { id: 19, name: "CC1-PC19", cpu: 3, memory: 31 },
  { id: 20, name: "CC1-PC20", cpu: 86, memory: 62 },
  { id: 21, name: "CC1-PC21", cpu: 41, memory: 79 },
  { id: 22, name: "CC1-PC22", cpu: 69, memory: 14 },
  { id: 23, name: "CC1-PC23", cpu: 32, memory: 53 },
  { id: 24, name: "CC1-PC24", cpu: 97, memory: 36 },
]

const ItemList = ({
  id,
  name,
  roomcode,
  selected,
  onClick
}) => {

  return(
    <Item 
      variant="outline" 
      className={["cursor-pointer hover:bg-secondary", selected ? "bg-primary hover:bg-secondary-foreground text-primary-foreground" : ""]}
      onClick={onClick}
    >
      <ItemMedia variant="icon">
        <Monitor />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{name}</ItemTitle>
        <p>{roomcode}</p>
      </ItemContent>
    </Item>
  )
}

const ComputerList = ({
  id,
  name,
  cpu,
  memory
}) => {
  return(
    <Card size="sm" className="overflow-visible">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Online</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p>CPU</p>
        <Progress value={cpu}/>
        <p>Memory</p>
        <Progress value={memory}/>
        <p>Uptime</p>
        <p>4 hours</p>
      </CardContent>
      <CardFooter >
        <Button variant="default">
          <Search/>
          {"View"}
        </Button>
        <Button variant="default">
          <Wrench />
          {"Mark for repair"}
        </Button>
      </CardFooter>
    </Card>
  )
}

function ComputerMonPage() {
  const computerRooms = dummyComputerRooms
  const computers = dummyCC1Computers

  const [selectedRoom, setSelectedRoom] = useState(1);
  return(
    <>
    <h1 className="text-4xl font-medium">{"Computer Monitoring"}</h1>

    <div className=" flex flex-row my-6 h-[94%] border-2 rounded-2xl shadow-lg">

      <div className="flex flex-col w-1/6 py-4 px-3 gap-2 overflow-scroll">
        {computerRooms.map((room) => (
          <ItemList
            key={room.id}
            name={room.name}
            roomcode={room.roomcode}
            selected={room.id === selectedRoom}
            onClick={() => setSelectedRoom(room.id)}
          />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 w-full p-4 border-l-2 overflow-scroll">
        {computers.map((computer) => (
          <ComputerList
            key={computer.id}
            name={computer.name}
            cpu={computer.cpu}
            memory={computer.memory}
          />
        ) )}
      </div>

    </div>
    </>
  )
}

export default ComputerMonPage;