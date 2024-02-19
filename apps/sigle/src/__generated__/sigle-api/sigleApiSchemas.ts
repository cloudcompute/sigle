/* eslint-disable */

/**
 * Generated by @openapi-codegen
 *
 * @version 0.1.0
 */
export type ExploreUser = {
  id: string;
  stacksAddress: string;
};

export type ExploreResponse = {
  nextPage: number | null;
  data: ExploreUser[];
};

export type PublicNewsletterEntity = {
  id: string;
  status: string;
};

export type UserMeProfileEntity = {
  id: string;
  stacksAddress: string;
  email: string | null;
  emailVerified: string | null;
  newsletter: PublicNewsletterEntity;
};

export type SubscriptionDto = {
  id: string;
  plan: string;
};

export type UserProfileEntity = {
  id: string;
  stacksAddress: string;
  followersCount: number;
  followingCount: number;
  subscription: SubscriptionDto;
  newsletter: PublicNewsletterEntity;
};

export type CreateUserFollowDto = {
  stacksAddress: string;
  createdAt: number;
};

export type DeleteUserFollowDto = {
  stacksAddress: string;
};

export type ReferrerDto = {
  domain: string;
  count: number;
};

export type AnalyticsHistoricalDto = {
  date: string;
  visits: number;
  pageviews: number;
};

export type AnalyticsStoryDto = {
  pathname: string;
  visits: number;
  pageviews: number;
};

export type HistoricalDto = {
  historical: AnalyticsHistoricalDto[];
  stories: AnalyticsStoryDto[];
};

export type CreateSubscriberDto = {
  /**
   * The Stacks address to subscribe to.
   */
  stacksAddress: string;
  email: string;
};

export type StoryDto = {
  id: string;
  publishedAt: string | null;
  unpublishedAt: string | null;
  deletedAt: string | null;
  email: string | null;
};

export type SendTestStoryDto = {
  id: string;
  emails: string;
  storyTitle: string;
  storyContent: string;
  storyCoverImage: string | null;
};

export type PublishStoryDto = {
  id: string;
  send: boolean;
};

export type UnpublishStoryDto = {
  id: string;
};

export type NewsletterEntity = {
  mailjetApiKey: string;
  mailjetApiSecret: string;
  senderEmail: string | null;
  status: string;
};

export type UpdateNewsletterDto = {
  apiKey: string;
  apiSecret: string;
};

export type ContactsListsEntity = {
  id: number;
  name: string;
  isSelected: boolean;
  isDeleted: boolean;
  subscriberCount: number;
};

export type UpdateContactsListDto = {
  listId: number;
};

export type SenderEntity = {
  id: number;
  email: string;
  isSelected: boolean;
};

export type UpdateSenderDto = {
  senderId: number;
};

export type AddEmailDto = {
  email: string;
};

export type VerifyEmailDto = {
  token: string;
};
