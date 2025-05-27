"use client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Control } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import {
  CalendarIcon,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  MailIcon,
} from "lucide-react";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  inputType?: string;
  name: string;
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "  textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
  EMAIL = "email",
  PASSWORD = "password",
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const {
    control,
    fieldType,
    name,
    label,
    icon,
    placeholder,
    showTimeSelect,
    dateFormat,
    renderSkeleton,
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="relative flex rounded-md border border-slate-300 dark:border-slate-700  bg-white dark:bg-slate-950/25 ">
          {props.icon && (
            <div className="absolute l-0 t-0 flex items-center justify-center w-12 h-full rounded-l-md">
              {icon}
            </div>
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              type="text"
              {...field}
              className="shad-input"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.EMAIL:
      return (
        <div className="relative flex rounded-md border border-slate-300 dark:border-slate-700  bg-white dark:bg-slate-950/25 ">
          <div className="absolute l-0 t-0 flex items-center justify-center w-12 h-full rounded-l-md">
            <MailIcon />
          </div>

          <FormControl>
            <Input
              placeholder={placeholder}
              type="email"
              {...field}
              className="shad-input"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.PASSWORD:
      return (
        <div className="relative flex rounded-md border border-slate-300 dark:border-slate-700  bg-white dark:bg-slate-950/25 ">
          <div className="absolute  flex items-center justify-center w-12 h-full rounded-l-md">
            <LockIcon />
          </div>

          <FormControl>
            <Input
              placeholder={placeholder}
              type={showPassword ? "text" : "password"}
              {...field}
              className="shad-input pr-12"
            />
          </FormControl>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 t-0 z-50 flex items-center justify-center w-12 h-full rounded-l-md"
          >
            {showPassword ? <EyeOffIcon className="w-20" /> : <EyeIcon />}
          </button>
        </div>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={placeholder}
            {...field}
            className="shad-textarea"
            disabled={props.disabled}
          />
        </FormControl>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="US"
            placeholder={placeholder}
            international
            withCountryCallingCode
            value={field.value}
            onChange={field.onChange}
            className="input-phone"
          />
        </FormControl>
      );
    case FormFieldType.DATE_PICKER:
      return (
        <div className="relative flex rounded-md border border-slate-300 dark:border-slate-700  bg-white dark:bg-slate-950/25 ">
          <div className="absolute l-0 t-0 flex items-center justify-center w-12 h-full rounded-l-md z-50">
            <CalendarIcon />
          </div>
          <FormControl>
            <DatePicker
              showTimeSelect={showTimeSelect ?? false}
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              timeInputLabel="Time:"
              dateFormat={dateFormat ?? "MM/dd/yyyy"}
              className="w-full pl-12 p-2 bg-transparent !important"
              wrapperClassName="w-full"
            />
          </FormControl>
        </div>
      );

    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="rounded-md border border-slate-300 dark:border-slate-700  bg-white dark:bg-slate-950/25 py-5">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="rounded-md border border-slate-300 dark:border-slate-700  bg-white dark:bg-slate-950 py-4">
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      );
    case FormFieldType.SKELETON:
      return renderSkeleton ? renderSkeleton(field) : null;
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor={props.name} className="checkbox-label">
              {props.label}
            </label>
          </div>
        </FormControl>
      );
    default:
      break;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1 ">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="shad-label">{label}</FormLabel>
          )}

          <RenderField field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
