import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  I18NLocaleCode: any;
  JSON: any;
  Upload: any;
};

export type Article = {
  __typename?: 'Article';
  ArtImage: UploadFileEntityResponse;
  Category?: Maybe<CategoryEntityResponse>;
  Content: Scalars['String'];
  Creator?: Maybe<CreatorEntityResponse>;
  Description: Scalars['String'];
  PublishedDate: Scalars['Date'];
  Slug: Scalars['String'];
  Tags?: Maybe<TagRelationResponseCollection>;
  Title: Scalars['String'];
  ViewsCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ArticleRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ArticleTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleLocalizationsArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars['ID']>;
};

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse';
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  Category?: InputMaybe<CategoryFiltersInput>;
  Content?: InputMaybe<StringFilterInput>;
  Creator?: InputMaybe<CreatorFiltersInput>;
  Description?: InputMaybe<StringFilterInput>;
  PublishedDate?: InputMaybe<DateFilterInput>;
  Slug?: InputMaybe<StringFilterInput>;
  Tags?: InputMaybe<TagFiltersInput>;
  Title?: InputMaybe<StringFilterInput>;
  ViewsCount?: InputMaybe<IntFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ArticleFiltersInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticleInput = {
  ArtImage?: InputMaybe<Scalars['ID']>;
  Category?: InputMaybe<Scalars['ID']>;
  Content?: InputMaybe<Scalars['String']>;
  Creator?: InputMaybe<Scalars['ID']>;
  Description?: InputMaybe<Scalars['String']>;
  PublishedDate?: InputMaybe<Scalars['Date']>;
  Slug?: InputMaybe<Scalars['String']>;
  Tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Title?: InputMaybe<Scalars['String']>;
  ViewsCount?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection';
  data: Array<ArticleEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  Articles?: Maybe<ArticleRelationResponseCollection>;
  CatImage?: Maybe<UploadFileEntityResponse>;
  CategoryName: Scalars['String'];
  Description: Scalars['String'];
  FeaturedArticle?: Maybe<ArticleEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<CategoryRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryLocalizationsArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  Articles?: InputMaybe<ArticleFiltersInput>;
  CategoryName?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  FeaturedArticle?: InputMaybe<ArticleFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CategoryFiltersInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  Articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  CatImage?: InputMaybe<Scalars['ID']>;
  CategoryName?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  FeaturedArticle?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type Creator = {
  __typename?: 'Creator';
  Bio: Scalars['String'];
  CreatorImage: UploadFileEntityResponse;
  CreatorName: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CreatorEntity = {
  __typename?: 'CreatorEntity';
  attributes?: Maybe<Creator>;
  id?: Maybe<Scalars['ID']>;
};

export type CreatorEntityResponse = {
  __typename?: 'CreatorEntityResponse';
  data?: Maybe<CreatorEntity>;
};

export type CreatorEntityResponseCollection = {
  __typename?: 'CreatorEntityResponseCollection';
  data: Array<CreatorEntity>;
  meta: ResponseCollectionMeta;
};

export type CreatorFiltersInput = {
  Bio?: InputMaybe<StringFilterInput>;
  CreatorName?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CreatorFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CreatorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CreatorFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CreatorInput = {
  Bio?: InputMaybe<Scalars['String']>;
  CreatorImage?: InputMaybe<Scalars['ID']>;
  CreatorName?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph =
  | Article
  | Category
  | Creator
  | I18NLocale
  | Subscriber
  | Tag
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<ArticleEntityResponse>;
  createArticleLocalization?: Maybe<ArticleEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCategoryLocalization?: Maybe<CategoryEntityResponse>;
  createCreator?: Maybe<CreatorEntityResponse>;
  createSubscriber?: Maybe<SubscriberEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteCreator?: Maybe<CreatorEntityResponse>;
  deleteSubscriber?: Maybe<SubscriberEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateArticle?: Maybe<ArticleEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateCreator?: Maybe<CreatorEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateSubscriber?: Maybe<SubscriberEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};

export type MutationCreateArticleArgs = {
  data: ArticleInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateArticleLocalizationArgs = {
  data?: InputMaybe<ArticleInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateCategoryLocalizationArgs = {
  data?: InputMaybe<CategoryInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateCreatorArgs = {
  data: CreatorInput;
};

export type MutationCreateSubscriberArgs = {
  data: SubscriberInput;
};

export type MutationCreateTagArgs = {
  data: TagInput;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationDeleteArticleArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteCreatorArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteSubscriberArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteTagArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};

export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateCreatorArgs = {
  data: CreatorInput;
  id: Scalars['ID'];
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateSubscriberArgs = {
  data: SubscriberInput;
  id: Scalars['ID'];
};

export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['ID'];
};

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query';
  article?: Maybe<ArticleEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  creator?: Maybe<CreatorEntityResponse>;
  creators?: Maybe<CreatorEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  subscriber?: Maybe<SubscriberEntityResponse>;
  subscribers?: Maybe<SubscriberEntityResponseCollection>;
  tag?: Maybe<TagEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryCreatorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryCreatorsArgs = {
  filters?: InputMaybe<CreatorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QuerySubscriberArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QuerySubscribersArgs = {
  filters?: InputMaybe<SubscriberFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscriber = {
  __typename?: 'Subscriber';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubscriberEntity = {
  __typename?: 'SubscriberEntity';
  attributes?: Maybe<Subscriber>;
  id?: Maybe<Scalars['ID']>;
};

export type SubscriberEntityResponse = {
  __typename?: 'SubscriberEntityResponse';
  data?: Maybe<SubscriberEntity>;
};

export type SubscriberEntityResponseCollection = {
  __typename?: 'SubscriberEntityResponseCollection';
  data: Array<SubscriberEntity>;
  meta: ResponseCollectionMeta;
};

export type SubscriberFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SubscriberFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SubscriberFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SubscriberFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SubscriberInput = {
  email?: InputMaybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  Articles?: Maybe<ArticleRelationResponseCollection>;
  TagText: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TagEntity = {
  __typename?: 'TagEntity';
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars['ID']>;
};

export type TagEntityResponse = {
  __typename?: 'TagEntityResponse';
  data?: Maybe<TagEntity>;
};

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  data: Array<TagEntity>;
  meta: ResponseCollectionMeta;
};

export type TagFiltersInput = {
  Articles?: InputMaybe<ArticleFiltersInput>;
  TagText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  Articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  TagText?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GetAllArticlesQueryVariables = Exact<{
  filters?: InputMaybe<ArticleFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<
    Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
  >;
}>;

export type GetAllArticlesQuery = {
  __typename?: 'Query';
  articles?: {
    __typename?: 'ArticleEntityResponseCollection';
    data: Array<{
      __typename?: 'ArticleEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Article';
        Title: string;
        Slug: string;
        ViewsCount?: number | null;
        Description: string;
        createdAt?: any | null;
        Content: string;
        PublishedDate: any;
        Creator?: {
          __typename?: 'CreatorEntityResponse';
          data?: {
            __typename?: 'CreatorEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Creator';
              CreatorName: string;
              Bio: string;
              CreatorImage: {
                __typename?: 'UploadFileEntityResponse';
                data?: {
                  __typename?: 'UploadFileEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'UploadFile';
                    name: string;
                    url: string;
                  } | null;
                } | null;
              };
            } | null;
          } | null;
        } | null;
        ArtImage: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              previewUrl?: string | null;
              name: string;
            } | null;
          } | null;
        };
        Tags?: {
          __typename?: 'TagRelationResponseCollection';
          data: Array<{
            __typename?: 'TagEntity';
            id?: string | null;
            attributes?: { __typename?: 'Tag'; TagText: string } | null;
          }>;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetOneArticleQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;

export type GetOneArticleQuery = {
  __typename?: 'Query';
  article?: {
    __typename?: 'ArticleEntityResponse';
    data?: {
      __typename?: 'ArticleEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Article';
        Title: string;
        Slug: string;
        ViewsCount?: number | null;
        Description: string;
        createdAt?: any | null;
        Content: string;
        PublishedDate: any;
        Creator?: {
          __typename?: 'CreatorEntityResponse';
          data?: {
            __typename?: 'CreatorEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Creator';
              CreatorName: string;
              Bio: string;
              CreatorImage: {
                __typename?: 'UploadFileEntityResponse';
                data?: {
                  __typename?: 'UploadFileEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'UploadFile';
                    name: string;
                    url: string;
                  } | null;
                } | null;
              };
            } | null;
          } | null;
        } | null;
        ArtImage: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              previewUrl?: string | null;
              name: string;
            } | null;
          } | null;
        };
        Tags?: {
          __typename?: 'TagRelationResponseCollection';
          data: Array<{
            __typename?: 'TagEntity';
            id?: string | null;
            attributes?: { __typename?: 'Tag'; TagText: string } | null;
          }>;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetArticleBySlugQueryVariables = Exact<{
  slug?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;

export type GetArticleBySlugQuery = {
  __typename?: 'Query';
  articles?: {
    __typename?: 'ArticleEntityResponseCollection';
    data: Array<{
      __typename?: 'ArticleEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Article';
        Title: string;
        Slug: string;
        ViewsCount?: number | null;
        Description: string;
        createdAt?: any | null;
        Content: string;
        PublishedDate: any;
        Creator?: {
          __typename?: 'CreatorEntityResponse';
          data?: {
            __typename?: 'CreatorEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Creator';
              CreatorName: string;
              Bio: string;
              CreatorImage: {
                __typename?: 'UploadFileEntityResponse';
                data?: {
                  __typename?: 'UploadFileEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'UploadFile';
                    name: string;
                    url: string;
                  } | null;
                } | null;
              };
            } | null;
          } | null;
        } | null;
        ArtImage: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              previewUrl?: string | null;
              name: string;
            } | null;
          } | null;
        };
        Tags?: {
          __typename?: 'TagRelationResponseCollection';
          data: Array<{
            __typename?: 'TagEntity';
            id?: string | null;
            attributes?: { __typename?: 'Tag'; TagText: string } | null;
          }>;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetAllCategoriesQueryVariables = Exact<{
  filters?: InputMaybe<CategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<
    Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
  >;
}>;

export type GetAllCategoriesQuery = {
  __typename?: 'Query';
  categories?: {
    __typename?: 'CategoryEntityResponseCollection';
    data: Array<{
      __typename?: 'CategoryEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Category';
        CategoryName: string;
        locale?: string | null;
        Description: string;
        CatImage?: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'UploadFile';
              name: string;
              ext?: string | null;
              previewUrl?: string | null;
              url: string;
            } | null;
          } | null;
        } | null;
        FeaturedArticle?: {
          __typename?: 'ArticleEntityResponse';
          data?: {
            __typename?: 'ArticleEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Article';
              Title: string;
              Slug: string;
              ViewsCount?: number | null;
              Description: string;
              createdAt?: any | null;
              Content: string;
              PublishedDate: any;
              Creator?: {
                __typename?: 'CreatorEntityResponse';
                data?: {
                  __typename?: 'CreatorEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'Creator';
                    CreatorName: string;
                    Bio: string;
                    CreatorImage: {
                      __typename?: 'UploadFileEntityResponse';
                      data?: {
                        __typename?: 'UploadFileEntity';
                        id?: string | null;
                        attributes?: {
                          __typename?: 'UploadFile';
                          name: string;
                          url: string;
                        } | null;
                      } | null;
                    };
                  } | null;
                } | null;
              } | null;
              ArtImage: {
                __typename?: 'UploadFileEntityResponse';
                data?: {
                  __typename?: 'UploadFileEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'UploadFile';
                    url: string;
                    previewUrl?: string | null;
                    name: string;
                  } | null;
                } | null;
              };
              Tags?: {
                __typename?: 'TagRelationResponseCollection';
                data: Array<{
                  __typename?: 'TagEntity';
                  id?: string | null;
                  attributes?: { __typename?: 'Tag'; TagText: string } | null;
                }>;
              } | null;
            } | null;
          } | null;
        } | null;
        Articles?: {
          __typename?: 'ArticleRelationResponseCollection';
          data: Array<{
            __typename?: 'ArticleEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Article';
              Title: string;
              Slug: string;
              ViewsCount?: number | null;
              Description: string;
              createdAt?: any | null;
              Content: string;
              PublishedDate: any;
              Creator?: {
                __typename?: 'CreatorEntityResponse';
                data?: {
                  __typename?: 'CreatorEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'Creator';
                    CreatorName: string;
                    Bio: string;
                    CreatorImage: {
                      __typename?: 'UploadFileEntityResponse';
                      data?: {
                        __typename?: 'UploadFileEntity';
                        id?: string | null;
                        attributes?: {
                          __typename?: 'UploadFile';
                          name: string;
                          url: string;
                        } | null;
                      } | null;
                    };
                  } | null;
                } | null;
              } | null;
              ArtImage: {
                __typename?: 'UploadFileEntityResponse';
                data?: {
                  __typename?: 'UploadFileEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'UploadFile';
                    url: string;
                    previewUrl?: string | null;
                    name: string;
                  } | null;
                } | null;
              };
              Tags?: {
                __typename?: 'TagRelationResponseCollection';
                data: Array<{
                  __typename?: 'TagEntity';
                  id?: string | null;
                  attributes?: { __typename?: 'Tag'; TagText: string } | null;
                }>;
              } | null;
            } | null;
          }>;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetOneCategoryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;

export type GetOneCategoryQuery = {
  __typename?: 'Query';
  category?: {
    __typename?: 'CategoryEntityResponse';
    data?: {
      __typename?: 'CategoryEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Category';
        CategoryName: string;
        locale?: string | null;
        Description: string;
        CatImage?: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'UploadFile';
              name: string;
              ext?: string | null;
              previewUrl?: string | null;
              url: string;
            } | null;
          } | null;
        } | null;
        FeaturedArticle?: {
          __typename?: 'ArticleEntityResponse';
          data?: {
            __typename?: 'ArticleEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Article';
              Title: string;
              Slug: string;
              ViewsCount?: number | null;
              Description: string;
              createdAt?: any | null;
              Content: string;
              PublishedDate: any;
              Creator?: {
                __typename?: 'CreatorEntityResponse';
                data?: {
                  __typename?: 'CreatorEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'Creator';
                    CreatorName: string;
                    Bio: string;
                    CreatorImage: {
                      __typename?: 'UploadFileEntityResponse';
                      data?: {
                        __typename?: 'UploadFileEntity';
                        id?: string | null;
                        attributes?: {
                          __typename?: 'UploadFile';
                          name: string;
                          url: string;
                        } | null;
                      } | null;
                    };
                  } | null;
                } | null;
              } | null;
              ArtImage: {
                __typename?: 'UploadFileEntityResponse';
                data?: {
                  __typename?: 'UploadFileEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'UploadFile';
                    url: string;
                    previewUrl?: string | null;
                    name: string;
                  } | null;
                } | null;
              };
              Tags?: {
                __typename?: 'TagRelationResponseCollection';
                data: Array<{
                  __typename?: 'TagEntity';
                  id?: string | null;
                  attributes?: { __typename?: 'Tag'; TagText: string } | null;
                }>;
              } | null;
            } | null;
          } | null;
        } | null;
        Articles?: {
          __typename?: 'ArticleRelationResponseCollection';
          data: Array<{
            __typename?: 'ArticleEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Article';
              Title: string;
              Slug: string;
              ViewsCount?: number | null;
              Description: string;
              createdAt?: any | null;
              Content: string;
              PublishedDate: any;
              Creator?: {
                __typename?: 'CreatorEntityResponse';
                data?: {
                  __typename?: 'CreatorEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'Creator';
                    CreatorName: string;
                    Bio: string;
                    CreatorImage: {
                      __typename?: 'UploadFileEntityResponse';
                      data?: {
                        __typename?: 'UploadFileEntity';
                        id?: string | null;
                        attributes?: {
                          __typename?: 'UploadFile';
                          name: string;
                          url: string;
                        } | null;
                      } | null;
                    };
                  } | null;
                } | null;
              } | null;
              ArtImage: {
                __typename?: 'UploadFileEntityResponse';
                data?: {
                  __typename?: 'UploadFileEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'UploadFile';
                    url: string;
                    previewUrl?: string | null;
                    name: string;
                  } | null;
                } | null;
              };
              Tags?: {
                __typename?: 'TagRelationResponseCollection';
                data: Array<{
                  __typename?: 'TagEntity';
                  id?: string | null;
                  attributes?: { __typename?: 'Tag'; TagText: string } | null;
                }>;
              } | null;
            } | null;
          }>;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetCategoryBySlugQueryVariables = Exact<{
  categoryName?: InputMaybe<StringFilterInput>;
}>;

export type GetCategoryBySlugQuery = {
  __typename?: 'Query';
  categories?: {
    __typename?: 'CategoryEntityResponseCollection';
    data: Array<{
      __typename?: 'CategoryEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Category';
        CategoryName: string;
        locale?: string | null;
        Description: string;
        CatImage?: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'UploadFile';
              name: string;
              ext?: string | null;
              previewUrl?: string | null;
              url: string;
            } | null;
          } | null;
        } | null;
        FeaturedArticle?: {
          __typename?: 'ArticleEntityResponse';
          data?: {
            __typename?: 'ArticleEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Article';
              Title: string;
              Slug: string;
              ViewsCount?: number | null;
              Description: string;
              createdAt?: any | null;
              Content: string;
              PublishedDate: any;
              Creator?: {
                __typename?: 'CreatorEntityResponse';
                data?: {
                  __typename?: 'CreatorEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'Creator';
                    CreatorName: string;
                    Bio: string;
                    CreatorImage: {
                      __typename?: 'UploadFileEntityResponse';
                      data?: {
                        __typename?: 'UploadFileEntity';
                        id?: string | null;
                        attributes?: {
                          __typename?: 'UploadFile';
                          name: string;
                          url: string;
                        } | null;
                      } | null;
                    };
                  } | null;
                } | null;
              } | null;
              ArtImage: {
                __typename?: 'UploadFileEntityResponse';
                data?: {
                  __typename?: 'UploadFileEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'UploadFile';
                    url: string;
                    previewUrl?: string | null;
                    name: string;
                  } | null;
                } | null;
              };
              Tags?: {
                __typename?: 'TagRelationResponseCollection';
                data: Array<{
                  __typename?: 'TagEntity';
                  id?: string | null;
                  attributes?: { __typename?: 'Tag'; TagText: string } | null;
                }>;
              } | null;
            } | null;
          } | null;
        } | null;
        Articles?: {
          __typename?: 'ArticleRelationResponseCollection';
          data: Array<{
            __typename?: 'ArticleEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'Article';
              Title: string;
              Slug: string;
              ViewsCount?: number | null;
              Description: string;
              createdAt?: any | null;
              Content: string;
              PublishedDate: any;
              Creator?: {
                __typename?: 'CreatorEntityResponse';
                data?: {
                  __typename?: 'CreatorEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'Creator';
                    CreatorName: string;
                    Bio: string;
                    CreatorImage: {
                      __typename?: 'UploadFileEntityResponse';
                      data?: {
                        __typename?: 'UploadFileEntity';
                        id?: string | null;
                        attributes?: {
                          __typename?: 'UploadFile';
                          name: string;
                          url: string;
                        } | null;
                      } | null;
                    };
                  } | null;
                } | null;
              } | null;
              ArtImage: {
                __typename?: 'UploadFileEntityResponse';
                data?: {
                  __typename?: 'UploadFileEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'UploadFile';
                    url: string;
                    previewUrl?: string | null;
                    name: string;
                  } | null;
                } | null;
              };
              Tags?: {
                __typename?: 'TagRelationResponseCollection';
                data: Array<{
                  __typename?: 'TagEntity';
                  id?: string | null;
                  attributes?: { __typename?: 'Tag'; TagText: string } | null;
                }>;
              } | null;
            } | null;
          }>;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetAllTagsQueryVariables = Exact<{
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<
    Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
  >;
}>;

export type GetAllTagsQuery = {
  __typename?: 'Query';
  tags?: {
    __typename?: 'TagEntityResponseCollection';
    data: Array<{
      __typename?: 'TagEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Tag';
        TagText: string;
        publishedAt?: any | null;
        createdAt?: any | null;
      } | null;
    }>;
  } | null;
};

export type GetOneTagQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;

export type GetOneTagQuery = {
  __typename?: 'Query';
  tag?: {
    __typename?: 'TagEntityResponse';
    data?: {
      __typename?: 'TagEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Tag';
        TagText: string;
        publishedAt?: any | null;
        createdAt?: any | null;
      } | null;
    } | null;
  } | null;
};

export const GetAllArticlesDocument = gql`
  query GetAllArticles(
    $filters: ArticleFiltersInput
    $locale: I18NLocaleCode
    $pagination: PaginationArg = {}
    $publicationState: PublicationState = LIVE
    $sort: [String] = []
  ) {
    articles(
      locale: $locale
      filters: $filters
      publicationState: $publicationState
      sort: $sort
      pagination: $pagination
    ) {
      data {
        id
        attributes {
          Title
          Slug
          ViewsCount
          Description
          createdAt
          Content
          PublishedDate
          Creator {
            data {
              id
              attributes {
                CreatorName
                Bio
                CreatorImage {
                  data {
                    id
                    attributes {
                      name
                      url
                    }
                  }
                }
              }
            }
          }
          ArtImage {
            data {
              id
              attributes {
                url
                previewUrl
                name
              }
            }
          }
          Tags {
            data {
              id
              attributes {
                TagText
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetAllArticlesQuery__
 *
 * To run a query within a React component, call `useGetAllArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllArticlesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      locale: // value for 'locale'
 *      pagination: // value for 'pagination'
 *      publicationState: // value for 'publicationState'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetAllArticlesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllArticlesQuery,
    GetAllArticlesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllArticlesQuery, GetAllArticlesQueryVariables>(
    GetAllArticlesDocument,
    options
  );
}

export function useGetAllArticlesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllArticlesQuery,
    GetAllArticlesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllArticlesQuery, GetAllArticlesQueryVariables>(
    GetAllArticlesDocument,
    options
  );
}

export type GetAllArticlesQueryHookResult = ReturnType<
  typeof useGetAllArticlesQuery
>;
export type GetAllArticlesLazyQueryHookResult = ReturnType<
  typeof useGetAllArticlesLazyQuery
>;
export type GetAllArticlesQueryResult = Apollo.QueryResult<
  GetAllArticlesQuery,
  GetAllArticlesQueryVariables
>;
export const GetOneArticleDocument = gql`
  query GetOneArticle($id: ID, $locale: I18NLocaleCode) {
    article(locale: $locale, id: $id) {
      data {
        id
        attributes {
          Title
          Slug
          ViewsCount
          Description
          createdAt
          Content
          PublishedDate
          Creator {
            data {
              id
              attributes {
                CreatorName
                Bio
                CreatorImage {
                  data {
                    id
                    attributes {
                      name
                      url
                    }
                  }
                }
              }
            }
          }
          ArtImage {
            data {
              id
              attributes {
                url
                previewUrl
                name
              }
            }
          }
          Tags {
            data {
              id
              attributes {
                TagText
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetOneArticleQuery__
 *
 * To run a query within a React component, call `useGetOneArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetOneArticleQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetOneArticleQuery,
    GetOneArticleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOneArticleQuery, GetOneArticleQueryVariables>(
    GetOneArticleDocument,
    options
  );
}

export function useGetOneArticleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOneArticleQuery,
    GetOneArticleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOneArticleQuery, GetOneArticleQueryVariables>(
    GetOneArticleDocument,
    options
  );
}

export type GetOneArticleQueryHookResult = ReturnType<
  typeof useGetOneArticleQuery
>;
export type GetOneArticleLazyQueryHookResult = ReturnType<
  typeof useGetOneArticleLazyQuery
>;
export type GetOneArticleQueryResult = Apollo.QueryResult<
  GetOneArticleQuery,
  GetOneArticleQueryVariables
>;
export const GetArticleBySlugDocument = gql`
  query GetArticleBySlug($slug: StringFilterInput, $locale: I18NLocaleCode) {
    articles(locale: $locale, filters: { Slug: $slug }) {
      data {
        id
        attributes {
          Title
          Slug
          ViewsCount
          Description
          createdAt
          Content
          PublishedDate
          Creator {
            data {
              id
              attributes {
                CreatorName
                Bio
                CreatorImage {
                  data {
                    id
                    attributes {
                      name
                      url
                    }
                  }
                }
              }
            }
          }
          ArtImage {
            data {
              id
              attributes {
                url
                previewUrl
                name
              }
            }
          }
          Tags {
            data {
              id
              attributes {
                TagText
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetArticleBySlugQuery__
 *
 * To run a query within a React component, call `useGetArticleBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticleBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticleBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetArticleBySlugQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetArticleBySlugQuery,
    GetArticleBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetArticleBySlugQuery, GetArticleBySlugQueryVariables>(
    GetArticleBySlugDocument,
    options
  );
}

export function useGetArticleBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetArticleBySlugQuery,
    GetArticleBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetArticleBySlugQuery,
    GetArticleBySlugQueryVariables
  >(GetArticleBySlugDocument, options);
}

export type GetArticleBySlugQueryHookResult = ReturnType<
  typeof useGetArticleBySlugQuery
>;
export type GetArticleBySlugLazyQueryHookResult = ReturnType<
  typeof useGetArticleBySlugLazyQuery
>;
export type GetArticleBySlugQueryResult = Apollo.QueryResult<
  GetArticleBySlugQuery,
  GetArticleBySlugQueryVariables
>;
export const GetAllCategoriesDocument = gql`
  query GetAllCategories(
    $filters: CategoryFiltersInput
    $locale: I18NLocaleCode
    $pagination: PaginationArg = {}
    $publicationState: PublicationState = LIVE
    $sort: [String] = []
  ) {
    categories(
      pagination: $pagination
      sort: $sort
      publicationState: $publicationState
      filters: $filters
      locale: $locale
    ) {
      data {
        id
        attributes {
          CategoryName
          CatImage {
            data {
              id
              attributes {
                name
                ext
                previewUrl
                url
              }
            }
          }
          locale
          Description
          FeaturedArticle {
            data {
              id
              attributes {
                Title
                Slug
                ViewsCount
                Description
                createdAt
                Content
                PublishedDate
                Creator {
                  data {
                    id
                    attributes {
                      CreatorName
                      Bio
                      CreatorImage {
                        data {
                          id
                          attributes {
                            name
                            url
                          }
                        }
                      }
                    }
                  }
                }
                ArtImage {
                  data {
                    id
                    attributes {
                      url
                      previewUrl
                      name
                    }
                  }
                }
                Tags {
                  data {
                    id
                    attributes {
                      TagText
                    }
                  }
                }
              }
            }
          }
          Articles {
            data {
              id
              attributes {
                Title
                Slug
                ViewsCount
                Description
                createdAt
                Content
                PublishedDate
                Creator {
                  data {
                    id
                    attributes {
                      CreatorName
                      Bio
                      CreatorImage {
                        data {
                          id
                          attributes {
                            name
                            url
                          }
                        }
                      }
                    }
                  }
                }
                ArtImage {
                  data {
                    id
                    attributes {
                      url
                      previewUrl
                      name
                    }
                  }
                }
                Tags {
                  data {
                    id
                    attributes {
                      TagText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetAllCategoriesQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      locale: // value for 'locale'
 *      pagination: // value for 'pagination'
 *      publicationState: // value for 'publicationState'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetAllCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllCategoriesQuery,
    GetAllCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(
    GetAllCategoriesDocument,
    options
  );
}

export function useGetAllCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllCategoriesQuery,
    GetAllCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAllCategoriesQuery,
    GetAllCategoriesQueryVariables
  >(GetAllCategoriesDocument, options);
}

export type GetAllCategoriesQueryHookResult = ReturnType<
  typeof useGetAllCategoriesQuery
>;
export type GetAllCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetAllCategoriesLazyQuery
>;
export type GetAllCategoriesQueryResult = Apollo.QueryResult<
  GetAllCategoriesQuery,
  GetAllCategoriesQueryVariables
>;
export const GetOneCategoryDocument = gql`
  query GetOneCategory($id: ID, $locale: I18NLocaleCode) {
    category(id: $id, locale: $locale) {
      data {
        id
        attributes {
          CategoryName
          CatImage {
            data {
              id
              attributes {
                name
                ext
                previewUrl
                url
              }
            }
          }
          locale
          Description
          FeaturedArticle {
            data {
              id
              attributes {
                Title
                Slug
                ViewsCount
                Description
                createdAt
                Content
                PublishedDate
                Creator {
                  data {
                    id
                    attributes {
                      CreatorName
                      Bio
                      CreatorImage {
                        data {
                          id
                          attributes {
                            name
                            url
                          }
                        }
                      }
                    }
                  }
                }
                ArtImage {
                  data {
                    id
                    attributes {
                      url
                      previewUrl
                      name
                    }
                  }
                }
                Tags {
                  data {
                    id
                    attributes {
                      TagText
                    }
                  }
                }
              }
            }
          }
          Articles {
            data {
              id
              attributes {
                Title
                Slug
                ViewsCount
                Description
                createdAt
                Content
                PublishedDate
                Creator {
                  data {
                    id
                    attributes {
                      CreatorName
                      Bio
                      CreatorImage {
                        data {
                          id
                          attributes {
                            name
                            url
                          }
                        }
                      }
                    }
                  }
                }
                ArtImage {
                  data {
                    id
                    attributes {
                      url
                      previewUrl
                      name
                    }
                  }
                }
                Tags {
                  data {
                    id
                    attributes {
                      TagText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetOneCategoryQuery__
 *
 * To run a query within a React component, call `useGetOneCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetOneCategoryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetOneCategoryQuery,
    GetOneCategoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOneCategoryQuery, GetOneCategoryQueryVariables>(
    GetOneCategoryDocument,
    options
  );
}

export function useGetOneCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOneCategoryQuery,
    GetOneCategoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOneCategoryQuery, GetOneCategoryQueryVariables>(
    GetOneCategoryDocument,
    options
  );
}

export type GetOneCategoryQueryHookResult = ReturnType<
  typeof useGetOneCategoryQuery
>;
export type GetOneCategoryLazyQueryHookResult = ReturnType<
  typeof useGetOneCategoryLazyQuery
>;
export type GetOneCategoryQueryResult = Apollo.QueryResult<
  GetOneCategoryQuery,
  GetOneCategoryQueryVariables
>;
export const GetCategoryBySlugDocument = gql`
  query GetCategoryBySlug($categoryName: StringFilterInput) {
    categories(filters: { CategoryName: $categoryName }) {
      data {
        id
        attributes {
          CategoryName
          CatImage {
            data {
              id
              attributes {
                name
                ext
                previewUrl
                url
              }
            }
          }
          locale
          Description
          FeaturedArticle {
            data {
              id
              attributes {
                Title
                Slug
                ViewsCount
                Description
                createdAt
                Content
                PublishedDate
                Creator {
                  data {
                    id
                    attributes {
                      CreatorName
                      Bio
                      CreatorImage {
                        data {
                          id
                          attributes {
                            name
                            url
                          }
                        }
                      }
                    }
                  }
                }
                ArtImage {
                  data {
                    id
                    attributes {
                      url
                      previewUrl
                      name
                    }
                  }
                }
                Tags {
                  data {
                    id
                    attributes {
                      TagText
                    }
                  }
                }
              }
            }
          }
          Articles {
            data {
              id
              attributes {
                Title
                Slug
                ViewsCount
                Description
                createdAt
                Content
                PublishedDate
                Creator {
                  data {
                    id
                    attributes {
                      CreatorName
                      Bio
                      CreatorImage {
                        data {
                          id
                          attributes {
                            name
                            url
                          }
                        }
                      }
                    }
                  }
                }
                ArtImage {
                  data {
                    id
                    attributes {
                      url
                      previewUrl
                      name
                    }
                  }
                }
                Tags {
                  data {
                    id
                    attributes {
                      TagText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetCategoryBySlugQuery__
 *
 * To run a query within a React component, call `useGetCategoryBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryBySlugQuery({
 *   variables: {
 *      categoryName: // value for 'categoryName'
 *   },
 * });
 */
export function useGetCategoryBySlugQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCategoryBySlugQuery,
    GetCategoryBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCategoryBySlugQuery,
    GetCategoryBySlugQueryVariables
  >(GetCategoryBySlugDocument, options);
}

export function useGetCategoryBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCategoryBySlugQuery,
    GetCategoryBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCategoryBySlugQuery,
    GetCategoryBySlugQueryVariables
  >(GetCategoryBySlugDocument, options);
}

export type GetCategoryBySlugQueryHookResult = ReturnType<
  typeof useGetCategoryBySlugQuery
>;
export type GetCategoryBySlugLazyQueryHookResult = ReturnType<
  typeof useGetCategoryBySlugLazyQuery
>;
export type GetCategoryBySlugQueryResult = Apollo.QueryResult<
  GetCategoryBySlugQuery,
  GetCategoryBySlugQueryVariables
>;
export const GetAllTagsDocument = gql`
  query GetAllTags(
    $filters: TagFiltersInput
    $pagination: PaginationArg = {}
    $publicationState: PublicationState = LIVE
    $sort: [String] = []
  ) {
    tags(
      filters: $filters
      pagination: $pagination
      publicationState: $publicationState
      sort: $sort
    ) {
      data {
        id
        attributes {
          TagText
          publishedAt
          createdAt
        }
      }
    }
  }
`;

/**
 * __useGetAllTagsQuery__
 *
 * To run a query within a React component, call `useGetAllTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTagsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      publicationState: // value for 'publicationState'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetAllTagsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllTagsQuery,
    GetAllTagsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllTagsQuery, GetAllTagsQueryVariables>(
    GetAllTagsDocument,
    options
  );
}

export function useGetAllTagsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllTagsQuery,
    GetAllTagsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllTagsQuery, GetAllTagsQueryVariables>(
    GetAllTagsDocument,
    options
  );
}

export type GetAllTagsQueryHookResult = ReturnType<typeof useGetAllTagsQuery>;
export type GetAllTagsLazyQueryHookResult = ReturnType<
  typeof useGetAllTagsLazyQuery
>;
export type GetAllTagsQueryResult = Apollo.QueryResult<
  GetAllTagsQuery,
  GetAllTagsQueryVariables
>;
export const GetOneTagDocument = gql`
  query GetOneTag($id: ID) {
    tag(id: $id) {
      data {
        id
        attributes {
          TagText
          publishedAt
          createdAt
        }
      }
    }
  }
`;

/**
 * __useGetOneTagQuery__
 *
 * To run a query within a React component, call `useGetOneTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneTagQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneTagQuery(
  baseOptions?: Apollo.QueryHookOptions<GetOneTagQuery, GetOneTagQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOneTagQuery, GetOneTagQueryVariables>(
    GetOneTagDocument,
    options
  );
}

export function useGetOneTagLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOneTagQuery,
    GetOneTagQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOneTagQuery, GetOneTagQueryVariables>(
    GetOneTagDocument,
    options
  );
}

export type GetOneTagQueryHookResult = ReturnType<typeof useGetOneTagQuery>;
export type GetOneTagLazyQueryHookResult = ReturnType<
  typeof useGetOneTagLazyQuery
>;
export type GetOneTagQueryResult = Apollo.QueryResult<
  GetOneTagQuery,
  GetOneTagQueryVariables
>;
