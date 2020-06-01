package com.jefferson.validador.error;

public class BuilderResourceNotFoundDetails extends BuilderErrorDetails {
    public static final class Builder {
        private String title;
        private int status;
        private String datail;
        private long timestamp;
        private String developerMessage;

        private Builder() {
        }

        public static Builder aBuilderResourceNotFoundDetail() {
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

        public BuilderResourceNotFoundDetails build() {
            BuilderResourceNotFoundDetails builderResourceNotFoundDetail = new BuilderResourceNotFoundDetails();
            builderResourceNotFoundDetail.setTitle(title);
            builderResourceNotFoundDetail.setStatus(status);
            builderResourceNotFoundDetail.setDatail(datail);
            builderResourceNotFoundDetail.setTimestamp(timestamp);
            builderResourceNotFoundDetail.setDeveloperMessage(developerMessage);
            return builderResourceNotFoundDetail;
        }
    }
}
