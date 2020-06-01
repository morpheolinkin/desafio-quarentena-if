package com.jefferson.validador.error;

public class ResourceNotFoundDetails {
    private String title;
    private int status;
    private String datail;
    private long timestamp;
    private String developerMessage;

    public ResourceNotFoundDetails(String title, int status, String datail,
                                   long timestamp, String developerMessage) {
        this.title = title;
        this.status = status;
        this.datail = datail;
        this.timestamp = timestamp;
        this.developerMessage = developerMessage;
    }

    public String getTitle() {
        return title;
    }

    public int getStatus() {
        return status;
    }

    public String getDatail() {
        return datail;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public String getDeveloperMessage() {
        return developerMessage;
    }
}
