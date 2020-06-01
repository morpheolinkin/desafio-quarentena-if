package com.jefferson.validador.handler;

import com.jefferson.validador.error.BuilderErrorDetails;
import com.jefferson.validador.error.BuilderValidationErrorDetails;
import com.jefferson.validador.error.ResourceNotFoundDetails;
import com.jefferson.validador.error.ResourceNotFoundExceptions;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(ResourceNotFoundExceptions.class)
    public ResponseEntity<ResourceNotFoundDetails> handleResourceNotFoundException(ResourceNotFoundExceptions foundException) {
        ResourceNotFoundDetails error = new ResourceNotFoundDetails(
                "Resource not found",
                HttpStatus.NOT_FOUND.value(),
                foundException.getMessage(),
                new Date().getTime(),
                foundException.getClass().getName());

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);

        //ResponseEntity<>(foundException, HttpStatus.NOT_FOUND);
    }

    //@ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleArgumentNotFoundException(MethodArgumentNotValidException manvException) {

        List<FieldError> fieldErrors = manvException.getBindingResult().getFieldErrors();

        String fields = fieldErrors.stream().map(FieldError::getField).collect(Collectors.joining(", "));
        String fildMesseges = fieldErrors.stream().map(FieldError::getDefaultMessage).collect(Collectors.joining(", "));

        BuilderValidationErrorDetails validationErrorDetail = BuilderValidationErrorDetails.Builder
                .newBuilder()
                .timestamp(new Date().getTime())
                .status(HttpStatus.BAD_REQUEST.value())
                .title("Field validation Error")
                .datail("Fild validation Error")
                .developerMessage(manvException.getClass().getName())
                .field(fields)
                .fieldMessage(fildMesseges)
                .build();


        return new ResponseEntity<>(validationErrorDetail, HttpStatus.BAD_REQUEST);

        //ResponseEntity<>(foundException, HttpStatus.NOT_FOUND);
    }

    @Override
    protected ResponseEntity<Object> handleExceptionInternal(
            Exception ex, @Nullable Object body, HttpHeaders headers, HttpStatus status, WebRequest request) {

        BuilderErrorDetails errorDetails = BuilderErrorDetails.Builer
                .newBuilder()
                .timestamp(new Date().getTime())
                .status(status.value())
                .title("Internal Exception")
                .datail("Por favor digite um cpf válido / Please enter a valid CPF!")
                .developerMessage(ex.getClass().getName())
                .build();
        return new ResponseEntity<>(errorDetails, headers, status);
    }
}
