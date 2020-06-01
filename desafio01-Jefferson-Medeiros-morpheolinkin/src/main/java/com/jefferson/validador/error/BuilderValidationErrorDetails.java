package com.jefferson.validador.error;

public class BuilderValidationErrorDetails extends BuilderErrorDetails {
    private String field;
    private String fieldMessage;

    public static final class Builder {
        private String title;
        private int status;
        private String datail;
        private long timestamp;
        private String developerMessage;
        private String field;
        private String fieldMessage;

        private Builder() {
        }

        public static Builder newBuilder() {
            return new Builder();
        }

        public Builder title(String title) {
            this.title = title;
            return this;
        }

        public Builder status(int status) {
            this.status = status;
            return this;
        }

        public Builder datail(String datail) {
            this.datail = datail;
            return this;
        }

        public Builder timestamp(long timestamp) {
            this.timestamp = timestamp;
            return this;
        }

        public Builder developerMessage(String developerMessage) {
            this.developerMessage = developerMessage;
            return this;
        }

        public Builder field(String field) {
            this.field = field;
            return this;
        }
        public Builder fieldMessage(String fieldMessage) {
            this.fieldMessage = fieldMessage;
            return this;
        }

        public BuilderValidationErrorDetails build() {
            BuilderValidationErrorDetails validationErrorDetail = new BuilderValidationErrorDetails();
            validationErrorDetail.setTitle(title);
            validationErrorDetail.setStatus(status);
            validationErrorDetail.setDatail(datail);
            validationErrorDetail.setTimestamp(timestamp);
            validationErrorDetail.setDeveloperMessage(developerMessage);
            validationErrorDetail.fieldMessage = fieldMessage;
            validationErrorDetail.field = field;
            return validationErrorDetail;
        }
    }

    public String getField() {
        return field;
    }

    public String getFieldMessage() {
        return fieldMessage;
    }
}
