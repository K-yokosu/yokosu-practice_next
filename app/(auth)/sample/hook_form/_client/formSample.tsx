"use client";

// library
import React from "react";
import { addDays, format } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// component
import { DisableOption } from "@/components/shadcn_components/form/calendar_picker";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/shadcn_components/hook-form/form_input";
import { FormCombobox } from "@/components/shadcn_components/hook-form/form_combobox";
import { FormSelect } from "@/components/shadcn_components/hook-form/form_select";
import { FormCheckbox } from "@/components/shadcn_components/hook-form/form_checkbox";
import { FormCheckboxes } from "@/components/shadcn_components/hook-form/form_checkboxes";
import { FormRadioGroup } from "@/components/shadcn_components/hook-form/form_radio_group";
import { FormTextarea } from "@/components/shadcn_components/hook-form/textare";
import { FormDatePicker } from "@/components/shadcn_components/hook-form/form_date_picker";
// other
import { OptionsType } from "@/components/shadcn_components/form/combobox_with_clear";

export const MAX_STR_LENGTH: number = 30;

export const frameworks: OptionsType = [
    {
        value: 1,
        label: "Next.js"
    },
    {
        value: 2,
        label: "SvelteKit"
    },
    {
        value: 3,
        label: "Nuxt.js"
    },
    {
        value: 4,
        label: "Remix"
    },
    {
        value: 5,
        label: "Astro"
    }
];

export const INIT_VALUES = {
    sample: {
        name: "",
        language: 0,
        second_language: 0,
        check: false,
        options: [],
        judgeo: null,
        description: "",
        date: ""
    }
};

export const sampleFormSchema = z.object({
    sample: z.object({
        name: z.string().min(1, {
            message: "name must be at least 1 characters."
        }),
        language: z.number().positive({
            message: "選択してください"
        }),
        second_language: z.number().positive({
            message: "選択してください"
        }),
        check: z.boolean().default(false).optional(),
        options: z.array(z.number()).refine(value => value.some(item => item), {
            message: "You have to select at least one item."
        }),
        judge: z.number().nullable(),
        description: z
            .string()
            .min(1, {
                message: "textarea must be at least 1 characters."
            })
            .max(MAX_STR_LENGTH, {
                message: `textarea must not be longer than ${MAX_STR_LENGTH} characters.`
            }),
        date: z.string({
            required_error: "A date of birth is required."
        })
    })
});

export default function FormSample() {
    const form = useForm<z.infer<typeof sampleFormSchema>>({
        resolver: zodResolver(sampleFormSchema),
        defaultValues: INIT_VALUES
    });
    const { control, handleSubmit, setError, watch } = form;
    const formData = watch();

    const onSubmit = async (values: z.infer<typeof sampleFormSchema>) => {
        // setLoading(true);
        // const formData = {
        //   sample: {
        //     ...values.sample,
        //     date: format(new Date(values.sample.date), "yyyy-MM-dd HH:mm:ss")
        //   }
        // };
        // mutate(formData);
    };

    return (
        <div className="bg-white p-4">
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <FormInput
                        control={control}
                        name={"sample.name"}
                        placeholder={"入力してください"}
                        // 以下省略可(実コードではこのコメント不要)
                        label={"name"}
                        description={"サンプル inputです"}
                        inputCss={"w-1/3"}
                        disabled={false}
                    />

                    <FormCombobox
                        control={control}
                        name={"sample.language"}
                        placeholder={"選択してください"}
                        options={frameworks}
                        // 以下省略可(実コードではこのコメント不要)
                        label={"language"}
                        description={"サンプル comboboxです"}
                        comboCss={"w-1/3"}
                        closeBtnCss=""
                        closeIconCss=""
                        disabled={false}
                    />

                    <FormSelect
                        control={control}
                        name={"sample.second_language"}
                        placeholder={"選択してください"}
                        options={frameworks}
                        // 以下省略可(実コードではこのコメント不要)
                        label={"second_language"}
                        description={"サンプル selectです"}
                        selectCss={"w-1/3"}
                        closeBtnCss=""
                        closeIconCss=""
                        disabled={false}
                    />

                    <FormCheckbox
                        control={control}
                        name={"sample.check"}
                        // 以下省略可(実コードではこのコメント不要)
                        label={"サンプル check"}
                        description={"サンプル checkです"}
                        checkFieldCss="w-1/3"
                        checkCss="w-8 h-8"
                        disabled={false}
                    />

                    <FormCheckboxes
                        control={control}
                        name={"sample.options"}
                        options={frameworks}
                        // 以下省略可(実コードではこのコメント不要)
                        label={"options"}
                        description={"サンプル checksです"}
                        checkFieldCss="w-1/3 bg-gray-200"
                        checkCss="w-4 h-4"
                        disabled={false}
                    />

                    <FormRadioGroup
                        control={control}
                        name={"sample.judge"}
                        options={frameworks}
                        // 以下省略可(実コードではこのコメント不要)
                        label={"judge"}
                        description={"サンプル radioです"}
                        radioFieldCss="w-full bg-gray-50 p-4"
                        radioGroupCss="flex-row space-x-2"
                        disabled={false}
                    />

                    <FormTextarea
                        control={control}
                        name={"sample.description"}
                        placeholder={"textarea の placeholder"}
                        maxStrLength={MAX_STR_LENGTH}
                        // 以下省略可(実コードではこのコメント不要)
                        label={"description"}
                        description={"サンプル textareaです"}
                        textareaFieldCss="w-full bg-gray-100 p-4"
                        textareaCss="resize"
                        readOnly={false}
                        isHideStrLength={false}
                    />

                    <FormDatePicker
                        control={control}
                        name={"sample.date"}
                        placeholder={"日付選択"}
                        // 以下省略可(実コードではこのコメント不要)
                        label={"date"}
                        description={"サンプル dateです"}
                        trigerElementCss="w-1/2 h-[55px] border-[2px]"
                        contentCss=""
                        disabledOption={DisableOption.selectDateDisablePast}
                        specifiedDate={format(addDays(new Date(), 2), "yyyy/MM/dd")}
                        disabled={false}
                    />

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    );
}
