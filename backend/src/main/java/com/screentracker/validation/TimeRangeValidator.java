package com.screentracker.validation;

import com.screentracker.dto.SessionRequest;
import com.screentracker.model.Session;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class TimeRangeValidator implements ConstraintValidator<ValidTimeRange, SessionRequest> {
    @Override
    public boolean isValid(SessionRequest request, ConstraintValidatorContext context) {
        if(request.getStart_time() == null || request.getEnd_time() == null) {
            return true; //Letting @NotNull handle this
        }
        return request.getEnd_time().isAfter(request.getStart_time());
    }
}
