import { z } from "zod";



export const ContactSchema = z.object({
    name: z
        .string({
            error: (issue) => issue.input == undefined// ((typeof issue.input == "string" && issue.input.trim().length < 1) || (issue.input ?? null) === null)
            ? "Full Name is required."
            : "Full Name must be a valid string."
        })
        .min(2, {
            error: (issue) => (issue.input == undefined || issue.input.length < 1)
                ? "Full Name is required."
                : "Full Name must be at least 2 characters long."
        })
        .max(250, {
            message: "Full Name must be less than 250 characters long.",
        }),
    email: z.email(),
    message: z
        .string({
            error: (issue) => issue.input == undefined// ((typeof issue.input == "string" && issue.input.trim().length < 1) || (issue.input ?? null) === null)
            ? "Message is required."
            : "Message must be a valid string."
        })
        .min(5, {
            error: (issue) => (issue.input == undefined || issue.input.length < 1)
                ? "Message is required."
                : "Message must be at least 5 characters long."
        })
        .max(2500, {
            message: "Message must be less than 2500 characters long.",
        })
});