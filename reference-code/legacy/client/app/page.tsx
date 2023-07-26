import { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, EnvelopeOpenIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { ExamplesNav } from "@/components/examples-nav";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { promises as fs } from "fs";
import path from "path";
import Image from "next/image";
import { z } from "zod";

import { columns } from "@/components/data-grid/columns";
import { DataTable } from "@/components/data-grid/data-table";
import { UserNav } from "@/components/data-grid/user-nav";
import { taskSchema } from "@/data/schema";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export const metadata: Metadata = {
  title: "Who's Hiring",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(path.join(process.cwd(), "data/tasks.json"));

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

const items = [
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  // More items...
];

const Jobs = () => (
  <ul role="list" className="space-y-3">
    {items.map((item) => (
      <li
        key={item.id}
        className="overflow-hidden flex bg-background ring-1 ring-inset ring-ring px-4 py-4 shadow-sm sm:rounded-lg"
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            className="h-20 w-20 rounded-lg object-cover"
            alt=""
          />
        </div>
        <div className="ml-4 flex-1">
          <h4 className="text-lg font-medium text-gray-900">The Bank of England Risks Hiking Too Far Ahead</h4>
          <div className="mt-1 text-sm text-gray-400">
            <span>Business</span> • <time>18 Nov 2022</time>
          </div>
        </div>
      </li>
    ))}
  </ul>
);
const HomePage = async () => {
  const tasks = await getTasks();
  return (
    <div className="p-12">
      <div className="container relative">
        <PageHeader>
          <Link href="#" className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
            🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
            <span className="sm:hidden">Style, a new CLI and more.</span>
            <span className="hidden sm:inline">Introducing Style, a new CLI and more.</span>
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Link>
          <PageHeaderHeading className="hidden md:block">Check out some examples.</PageHeaderHeading>
          <PageHeaderHeading className="md:hidden">Examples</PageHeaderHeading>
          <PageHeaderDescription>
            Dashboard, cards, authentication. Some examples built using the components. Use this as a guide to build
            your own.
          </PageHeaderDescription>
          <section className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
            <Link href="#" className={cn(buttonVariants(), "rounded-[6px]")}>
              Get Started
            </Link>
            <Link href="#" className={cn(buttonVariants({ variant: "outline" }), "rounded-[6px]")}>
              Components
            </Link>
          </section>
        </PageHeader>
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <SelectDemo />
              <SelectDemo />
              <SelectDemo />
            </div>
            <Button variant="outline">
              <svg
                className="mr-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M204,128a12,12,0,0,1-12,12H64a12,12,0,0,1,0-24H192A12,12,0,0,1,204,128Zm28-60H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24Zm-80,96H104a12,12,0,0,0,0,24h48a12,12,0,0,0,0-24Z"></path>
              </svg>
              More filters
            </Button>
          </div>
          <form className="mt-5 sm:flex sm:items-center sm:gap-x-4">
            <div className="w-full grow">
              <label htmlFor="email" className="sr-only">
                Search
              </label>
              <Input type="text" placeholder="Search for opportunitites" />
            </div>
            <div className="flex items-center gap-x-2">
              <Button variant="outline" type="button">
                Clear
              </Button>
              <Button type="submit">Search</Button>
            </div>
          </form>
          <div className="mt-8 h-96 rounded-lg ring-1 ring-inset ring-ring relative">
            <img
              src="/new-yourk-map.png"
              alt=""
              className="absolute inset-0 object-cover max-h-full w-full rounded-lg"
            />
          </div>
          <div className="mt-8 overflow-hidden rounded-[0.5rem] border bg-background shadow">
            <div className="md:hidden">
              <Image
                src="/examples/tasks-light.png"
                width={1280}
                height={998}
                alt="Playground"
                className="block dark:hidden"
              />
              <Image
                src="/examples/tasks-dark.png"
                width={1280}
                height={998}
                alt="Playground"
                className="hidden dark:block"
              />
            </div>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
              <DataTable data={tasks} columns={columns} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default HomePage;
