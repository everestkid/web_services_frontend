'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "./ui/button";

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  address: z.string().min(2).max(50),
  bed:z.number(),
  baths:z.number(),
  parking:z.number(),
  price:z.number()

})


 export default function  AddPropertyDailog() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          address: "",
        },
      })
     
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }



return (      
    <Dialog>
<DialogTrigger> <Button>Add New Property</Button></DialogTrigger>
<DialogContent>
 <DialogHeader>
   <DialogTitle>Add a New Property</DialogTitle>
   <DialogDescription>
   <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        

    <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Address" {...field} />
              </FormControl>
            
            </FormItem>
          )}
        />


<FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="Price" {...field} />
              </FormControl>
            
            </FormItem>
          )}
        />


<div className="grid grid-cols-3 gap-4">
<FormField
          control={form.control}
          name="bed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Baths</FormLabel>
              <FormControl>
                <Input placeholder="Baths" {...field} />
              </FormControl>
             
            </FormItem>
          )}
        />




<FormField
          control={form.control}
          name="baths"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Baths</FormLabel>
              <FormControl>
                <Input placeholder="Baths" {...field} />
              </FormControl>
             
            </FormItem>
          )}
          
        />

<FormField
          control={form.control}
          name="parking"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parking</FormLabel>
              <FormControl>
                <Input placeholder="Parking" {...field} />
              </FormControl>
              
            </FormItem>
          )}  


        />  


</div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
   </DialogDescription>
 </DialogHeader>
</DialogContent>
</Dialog>
);

}

// export the Component


