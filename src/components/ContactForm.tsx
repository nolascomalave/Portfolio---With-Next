"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "./ui/input-group";
import { Button } from "@/components/ui/button";
import { ContactSchema } from "@/schemas/contact.schema";
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { useRef, useTransition } from "react";
import z from "zod";
import { BorderBeam } from "./ui/border-beam";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { sendMailAction } from "@/actions/mailer";


export default function ContactForm() {
    const [isPending, startTransition] = useTransition();
    const __ = useTranslations('layout.sections_content.contact.form');
    const formRef = useRef<HTMLFormElement>(null);
    const form = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof ContactSchema>) => {
        startTransition(async () => {
            await new Promise(async (resolve) => {
                toast.promise(async () => {
                    /* await new Promise(res => setTimeout(() => res(true), 3000));
                    throw new Error("Example"); */
                    const result = await sendMailAction(data);

                    if(!result.success) {
                        throw new Error(result.message);
                    }
                }, {
                    loading: __('actions.sending'),
                    success: () => {
                        resolve(true);
                        form.reset();
                        return __('actions.sent');
                    },
                    error: () => {
                        resolve(true);
                        return __('actions.unexpected-error');
                    },
                });
            });
        });
    }

    const {} = useForm<{
        name: string;
        email: string;
        message: string;
    }>({
        resolver: zodResolver(ContactSchema)
    })

    return (
        <Card className="relative bg-background dark:bg-[rgba(13,_12,_15)]">
            {/* <div className="absolute top-0 right-0 bottom-0 left-0 rounded-xl backdrop-blur-xs -z-[1]"></div> */}
            <BorderBeam duration={4} size={300} reverse style={{
                backgroundImage: "linear-gradient(to right, transparent, var(--dark-purple-color), var(--light-purple-color), var(--neon-green-color))"
            }} />
            <CardContent className="p-6">
                <form ref={formRef} id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="name">{__("full-name")}</FieldLabel>
                                    <InputGroup>
                                        <Input
                                            {...field}
                                            id="name"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="John Doe..."
                                            autoComplete="off"
                                            className={fieldState.invalid ? "border-destructive" : undefined}
                                            disabled={isPending}
                                        />
                                    </InputGroup>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="email">{__("email")}</FieldLabel>
                                    <InputGroup>
                                        <Input
                                            {...field}
                                            id="email"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="example@mail.com"
                                            autoComplete="off"
                                            className={fieldState.invalid ? "border-destructive" : undefined}
                                            disabled={isPending}
                                        />
                                    </InputGroup>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="message"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="message">
                                        {__("message")}
                                    </FieldLabel>
                                    <InputGroup>
                                        <InputGroupTextarea
                                            {...field}
                                            id="message"
                                            placeholder="Your message..."
                                            rows={6}
                                            className="min-h-24 resize-none"
                                            aria-invalid={fieldState.invalid}
                                            disabled={isPending}
                                        />
                                        <InputGroupAddon align="block-end">
                                            <InputGroupText className="tabular-nums">
                                                {field.value.length}/2500 {__("characters")}
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Field orientation="horizontal">
                    <Button type="button" className="cursor-pointer uppercase" variant="outline" onClick={() => form.reset()} disabled={isPending}>
                        {__("reset")}
                    </Button>
                    <Button type="submit" className="cursor-pointer uppercase w-full bg-dark-purple hover:bg-violet-600 dark:bg-neon-green dark:hover:bg-emerald-600 dark:focus:bg-emerald-600" form="contact-form" disabled={isPending}>
                        {isPending && <Spinner/>}
                        {__(isPending ? "sending" : "send")}
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    );
}