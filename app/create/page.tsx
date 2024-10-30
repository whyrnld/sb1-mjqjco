"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  service: z.string({
    required_error: "Please select a service.",
  }),
  totalPrice: z.string().min(1, "Please enter the total price."),
  slots: z.string().min(1, "Please enter the number of slots."),
  description: z.string().min(10, "Description must be at least 10 characters."),
});

export default function CreatePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Listing created successfully!");
    console.log(values);
  }

  return (
    <div className="container max-w-2xl py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Create a Sharing Listing</h1>
        <p className="text-muted-foreground">
          Fill out the form below to create a new subscription sharing listing.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="netflix">Netflix</SelectItem>
                    <SelectItem value="spotify">Spotify</SelectItem>
                    <SelectItem value="youtube">YouTube Premium</SelectItem>
                    <SelectItem value="disney">Disney+</SelectItem>
                    <SelectItem value="hbo">HBO Max</SelectItem>
                    <SelectItem value="prime">Amazon Prime</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select the streaming service you want to share.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="totalPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Monthly Price (R$)</FormLabel>
                <FormControl>
                  <Input type="number" step="0.01" placeholder="55.90" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the total monthly subscription price.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="slots"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Available Slots</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="4" {...field} />
                </FormControl>
                <FormDescription>
                  How many slots are available to share?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell others about your sharing group..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Add any additional information or requirements.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Create Listing</Button>
        </form>
      </Form>
    </div>
  );
}