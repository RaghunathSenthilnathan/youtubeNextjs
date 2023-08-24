export interface AuthorTypes {
  author?: { url: string }[] | null;
  avatar?: avatar[];
  title?: string;
  badges?: { url: string; type: string }[] | null;
  views?: number;
  stats?: { subscribersText: string };
  likes?: number;
}

export interface VideoDetailsTypes {
  videoId?: string;
  lengthSeconds?: number;
  thumbnails?: { url?: string }[] | null;
  title?: string;
  descriptionSnippet?: string;
  author?: AuthorTypes;
  stats?: AuthorTypes;
  publishedTimeText?: string;
}

export interface avatar {
  url: string;
}

export interface SearchResultTypes {
  video?: VideoDetailsTypes;
  key?: string;
}

export interface RelatedVideosTypes {
  contents?: { type: string; video: VideoDetailsTypes }[];
}

export interface AuthorTypesForVideoCard {
  author?: { url: string }[] | null;
  title?: string;
  badges?: { url: string; type: string }[] | null;
  views?: number;
}

export interface SearchResultTypesForVideoCard {
  video?: VideoDetailsTypes;
  key?: string;
}

export interface VideoCardTypes {
  video: VideoDetailsTypes;
}

export interface videoDetaisl {
  videoId: string;
}
export interface ResultTypes {
  video: videoDetaisl;
}
