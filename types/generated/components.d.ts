import type { Schema, Struct } from '@strapi/strapi';

export interface ContactSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_contact_social_links';
  info: {
    description: '';
    displayName: 'Social Link';
  };
  attributes: {
    icon_url: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContestsContest extends Struct.ComponentSchema {
  collectionName: 'components_contests_contests';
  info: {
    description: '';
    displayName: 'contest';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    date: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeaderHeaderLinks extends Struct.ComponentSchema {
  collectionName: 'components_header_header_links';
  info: {
    description: '';
    displayName: 'HeaderLink';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface HomeButton extends Struct.ComponentSchema {
  collectionName: 'components_home_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeFeaturedArticle extends Struct.ComponentSchema {
  collectionName: 'components_home_featured_articles';
  info: {
    displayName: 'FeaturedArticle';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_home_heroes';
  info: {
    description: '';
    displayName: 'HomeHero';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    featured_article: Schema.Attribute.Component<
      'home.featured-article',
      false
    > &
      Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    primary_button: Schema.Attribute.Component<'home.button', false> &
      Schema.Attribute.Required;
    secondary_button: Schema.Attribute.Component<'home.button', false> &
      Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface HomeNews extends Struct.ComponentSchema {
  collectionName: 'components_home_news';
  info: {
    description: '';
    displayName: 'News';
  };
  attributes: {
    news_posts: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-post.news-post'
    >;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeNewsPost extends Struct.ComponentSchema {
  collectionName: 'components_home_news_posts';
  info: {
    displayName: 'NewsPost';
  };
  attributes: {
    date: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPageHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_page_heroes';
  info: {
    displayName: 'PageHero';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SponsorshipFeature extends Struct.ComponentSchema {
  collectionName: 'components_sponsorship_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    tiers: Schema.Attribute.JSON;
  };
}

export interface SponsorshipHighlight extends Struct.ComponentSchema {
  collectionName: 'components_sponsorship_highlights';
  info: {
    displayName: 'Highlight';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SponsorshipSection extends Struct.ComponentSchema {
  collectionName: 'components_sponsorship_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    features: Schema.Attribute.Component<'sponsorship.feature', true> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SponsorshipTier extends Struct.ComponentSchema {
  collectionName: 'components_sponsorship_tiers';
  info: {
    displayName: 'Tier';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    highlights: Schema.Attribute.Component<'sponsorship.highlight', true> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TeamDepartament extends Struct.ComponentSchema {
  collectionName: 'components_team_departaments';
  info: {
    description: '';
    displayName: 'Department';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    hero: Schema.Attribute.Component<'shared.page-hero', false>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    leader: Schema.Attribute.Component<'team.team-member', false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    separator: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    team_members: Schema.Attribute.Component<'team.team-member', true> &
      Schema.Attribute.Required;
  };
}

export interface TeamTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_team_team_members';
  info: {
    displayName: 'TeamMember';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.social-link': ContactSocialLink;
      'contests.contest': ContestsContest;
      'header.header-links': HeaderHeaderLinks;
      'home.button': HomeButton;
      'home.featured-article': HomeFeaturedArticle;
      'home.home-hero': HomeHomeHero;
      'home.news': HomeNews;
      'home.news-post': HomeNewsPost;
      'shared.media': SharedMedia;
      'shared.page-hero': SharedPageHero;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'sponsorship.feature': SponsorshipFeature;
      'sponsorship.highlight': SponsorshipHighlight;
      'sponsorship.section': SponsorshipSection;
      'sponsorship.tier': SponsorshipTier;
      'team.departament': TeamDepartament;
      'team.team-member': TeamTeamMember;
    }
  }
}
