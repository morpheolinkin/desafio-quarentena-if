package com.jefferson.validador.error;

public class BuilderErrorDetails {
    private String title;
    private int status;
    private String datail;
    private long timestamp;
    private String developerMessage;



    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getDatail() {
        return datail;
    }

    public void setDatail(String datail) {
        this.datail = datail;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public String getDeveloperMessage() {
        return developerMessage;
    }

    public void setDeveloperMessage(String developerMessage) {
        this.developerMessage = developerMessage;
    }

    public static final class Builer {
        private String title;
        private int status;
        private String datail;
        private long timestamp;
        private String developerMessage;

        private Builer() {
        }

        public static Builer newBuilder() {
            return new Builer();
        }

        public Builer title(String title) {
            this.title = title;
            return this;
        }

        public Builer status(int status) {
            this.status = status;
            return this;
        }

        public Builer datail(String datail) {
            this.datail = datail;
            return this;
        }

        public Builer timestamp(long timestamp) {
            this.timestamp = timestamp;
            return this;
        }

        public Builer developerMessage(String developerMessage) {
            this.developerMessage = developerMessage;
            return this;
        }

        public BuilderErrorDetails build() {
            BuilderErrorDetails builderErrorDetail = new BuilderErrorDetails();
            builderErrorDetail.setTitle(title);
            builderErrorDetail.setStatus(status);
            builderErrorDetail.setDatail(datail);
            builderErrorDetail.setTimestamp(timestamp);
            builderErrorDetail.setDeveloperMessage(developerMessage);
            return builderErrorDetail;
        }
    }
}
