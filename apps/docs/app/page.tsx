import { css } from "@repo/styled/css";
import { flex } from "@repo/styled/patterns";
import { ChevronRight, Mail } from "lucide-react";

import {
  Checkbox,
  Button,
  Input,
  InputOTPDemo,
  Label,
  RadioGroupDemo,
  SeparatorDemo,
  Slider,
  TabsDemo,
  TooltipDemo,
  DropdownMenuDemo,
  CollapsibleDemo,
  SelectDemo,
  BreadcrumbDemo,
  AccordionDemo,
  AlertDemo,
  AvatarDemo,
  Badge,
  DialogDemo,
  AlertDialogDemo,
  PopoverDemo,
  PaginationDemo,
  ScrollAreaDemo,
  CalendarDemo,
  CardDemo,
  ProgressDemo,
  SkeletonDemo,
  DatePickerDemo,
  TableDemo,
  SheetDemo,
  ToastDemo,
  Heading,
} from "@repo/ui";
// TODO: figure out if this import style is better
import { Switch } from "@repo/ui/switch";
import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
    <main className="">
      <ThemeToggle />

      <DemoBox title="Accordion">
        <AccordionDemo />
      </DemoBox>

      <DemoBox title="Alert">
        <AlertDemo />
      </DemoBox>

      <DemoBox title="Alert Dialog">
        <AlertDialogDemo />
      </DemoBox>

      <DemoBox title="Avatar">
        <AvatarDemo />
      </DemoBox>

      <DemoBox title="Badge">
        <BadgeDemo />
      </DemoBox>

      <DemoBox title="Breadcrumb">
        <BreadcrumbDemo />
      </DemoBox>

      <DemoBox title="Buttons">
        <ButtonDemo />
      </DemoBox>

      <DemoBox title="Calendar">
        <CalendarDemo />
      </DemoBox>

      <DemoBox title="Card">
        <CardDemo />
      </DemoBox>

      <DemoBox title="Checkbox">
        <CheckboxDemo />
      </DemoBox>

      <DemoBox title="Collapsible">
        <CollapsibleDemo />
      </DemoBox>

      <DemoBox title="Date Picker">
        <DatePickerDemo />
      </DemoBox>

      <DemoBox title="Dialog">
        <DialogDemo />
      </DemoBox>

      <DemoBox title="Dropdown Menu">
        <DropdownMenuDemo />
      </DemoBox>

      <DemoBox title="Input">
        <InputDemo />
      </DemoBox>

      <DemoBox title="Input OTP">
        <InputOTPDemo />
      </DemoBox>

      <DemoBox title="Pagination">
        <PaginationDemo />
      </DemoBox>

      <DemoBox title="Popover">
        <PopoverDemo />
      </DemoBox>

      <DemoBox title="Progress">
        <ProgressDemo />
      </DemoBox>

      <DemoBox title="Radio Group">
        <RadioGroupDemo />
      </DemoBox>

      <DemoBox title="Scroll Area">
        <ScrollAreaDemo />
      </DemoBox>

      <DemoBox title="Select">
        <SelectDemo />
      </DemoBox>

      <DemoBox title="Separator">
        <SeparatorDemo />
      </DemoBox>

      <DemoBox title="Sheet">
        <SheetDemo />
      </DemoBox>

      <DemoBox title="Skeleton">
        <SkeletonDemo />
      </DemoBox>

      <DemoBox title="Slider">
        <SliderDemo />
      </DemoBox>

      <DemoBox title="Switch">
        <SwitchDemo />
      </DemoBox>

      <DemoBox title="Table">
        <TableDemo />
      </DemoBox>

      <DemoBox title="Tabs">
        <TabsDemo />
      </DemoBox>

      <DemoBox title="Toast">
        <ToastDemo />
      </DemoBox>

      <DemoBox title="Tooltip">
        <TooltipDemo />
      </DemoBox>
    </main>
  );
}

// toast, form?,

function DemoBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={css({ maxW: "900px", mx: "auto" })}>
      <Heading>{title}</Heading>
      <div
        className={flex({
          justify: "center",
          align: "center",
          width: "full",
          padding: 10,
          pt: 3,
        })}
      >
        {children}
      </div>
    </div>
  );
}

export function BadgeDemo() {
  return (
    <div className={flex({ align: "center", gap: "4" })}>
      <Badge>Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}

function ButtonDemo() {
  return (
    <div className={flex({ align: "center", gap: "4" })}>
      <Button>
        <Mail className={css({ size: "4", mr: "2" })} />
        Primary
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>

      <Button variant="outline" size="icon">
        <ChevronRight className={css({ size: "4" })} />
      </Button>
    </div>
  );
}

function CheckboxDemo() {
  return (
    <div className={flex({ align: "center", spaceX: "2" })}>
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}

function InputDemo() {
  return (
    <div className={flex({ spaceY: "4", flexDir: "column" })}>
      <Input type="email" placeholder="Email" />
      <Input disabled type="email" placeholder="Email" />
      <Input id="picture" type="file" />
    </div>
  );
}

function SwitchDemo() {
  return (
    <div className={flex({ align: "center", spaceX: "2" })}>
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}

function SliderDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} css={{ w: "60%" }} />;
}
