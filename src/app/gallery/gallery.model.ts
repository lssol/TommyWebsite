import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class Image {
    @JsonProperty("link", String)
    link: string;
    @JsonProperty("description", String)
    description: string;
}

@JsonObject
export class Project {
    @JsonProperty("name", String)
    name: string;
    @JsonProperty("description", String)
    description: string;
    @JsonProperty("category", String)
    category: string;
    @JsonProperty("images", [Image])
    images: Image[];
}