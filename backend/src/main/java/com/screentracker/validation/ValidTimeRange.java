package com.screentracker.validation;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.*;

@Constraint(validatedBy = TimeRangeValidator.class)
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidTimeRange {
    String message() default "End time must be after start time";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
