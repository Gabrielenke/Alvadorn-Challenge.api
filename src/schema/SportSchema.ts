import { z } from "zod";

export const createSportSchema = z.object({
  body: z.object({
    activity_name: z
      .string()
      .min(3, { message: "Activity name must be greater than 1 character!" }),
    activity_detail: z
      .string()
      .min(4, {
        message: "Activity detail must be greater than 4 characters!",
      }),
    activity_type: z
      .string()
      .min(1, { message: "Activity type must be greater than 1 character!" }),
    distance: z
      .number()
      .nonnegative({ message: "Distance must be a non-negative number!" }),
    effort: z
      .number()
      .int()
      .nonnegative({ message: "Effort must be a non-negative integer!" }),
  }),
});

export const updateSportSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      activity_name: z
        .string()
        .min(3, { message: "Activity name must be greater than 1 character!" })
        .optional(),
      activity_detail: z
        .string()
        .min(4, {
          message: "Activity detail must be greater than 4 characters!",
        })
        .optional(),
      activity_type: z
        .string()
        .min(1, { message: "Activity type must be greater than 1 character!" })
        .optional(),
      distance: z
        .number()
        .nonnegative({ message: "Distance must be a non-negative number!" })
        .optional(),
      effort: z
        .number()
        .int()
        .nonnegative({ message: "Effort must be a non-negative integer!" })
        .optional(),
    })
    .partial(),
});
