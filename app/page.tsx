import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddPropertyDialog from "@/components/AddPropertyDailog";



const propertLists =[
  {
    id: 1,
    title: "Property 1",
    address: "17 Rue Saint Catherine, Toulouse",
    parking:2,
    price: "100,000",
    bath:2,
    area:20,
    beds:2,
    image: "/property.jpg"
  },
  {
    id: 2,
    title: "Property 2",
    address: "17 Rue Saint Catherine, Toulouse",
    parking:2,
    price: "200,000",
    bath:2,
    area:20,
    beds:2,
    image: "/property.jpg"
  },
  {
    id: 3,
    title: "Property 3",
    address: "17 Rue Saint Catherine, Toulouse",
    parking:2,
    price: "300,000",
    bath:2,
    area:20,
    beds:2,
    image: "/property.jpg"
  },
  {
    id: 4,
    title: "Property 4",
    address: "17 Rue Saint Catherine, Toulouse",
    parking:2,
    price: "400,000",
    bath:2,
    area:20,
    beds:2,
    image: "/property.jpg"
  },
  {
    id: 5,
    title: "Property 5",
    address: "17 Rue Saint Catherine, Toulouse",
    parking:2,
    price: "500,000",
    bath:2,
    area:20,
    beds:2,
    image: "/property.jpg"
  },
  {
    id: 6,
    title: "Property 6",
    address: "17 Rue Saint Catherine, Toulouse",
    parking:2,
    price: "600,000",
    bath:2,
    area:20,
    beds:2,
    image: "/property.jpg"
  }
]


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       

<Tabs defaultValue="buy" className="w-[300px] m-auto h-[50px]">
  <TabsList className="w-full">
    <TabsTrigger className="w-full" value="buy">Buy</TabsTrigger>
    <TabsTrigger className="w-full" value="rent">Rent</TabsTrigger>
  </TabsList>
  {/* <TabsContent value="buy">Buy</TabsContent>
  <TabsContent value="rent">Rent</TabsContent> */}
</Tabs>

      <div className="z-10 max-w-6xl w-full items-center justify-between font-normal text-sm lg:flex">


     
        
      <div className="grid grid-cols-3 justify-between">
        {propertLists.map((property) => (
          <Card key={property.id} className="m-8">
            <div key={property.id} className="flex flex-col justify-between">
              <Image
                src={property.image}
                alt="Property Image"
                width={500}
                height={400}
                className=""
              />
              <div className="flex flex-col pt-8 pl-4">
              <p className="text-2xl font-bold">€ {property.price}</p>
              <div className="flex flex-row gap-1">
                <span>{property.bath} baths</span> |
                <span>{property.beds} beds</span> |

                <span>{property.parking} parking</span>

              </div>
                <p className="text-lg font-normal">{property.address}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      </div>
      </main>)
}
