import type { Schema, Struct } from '@strapi/strapi';

export interface PlantaBayuncaEquiposBayunca extends Struct.ComponentSchema {
  collectionName: 'components_planta_bayunca_equipos_bayuncas';
  info: {
    description: '';
    displayName: 'equiposBayunca';
  };
  attributes: {
    codigoQR: Schema.Attribute.String;
    criticidad: Schema.Attribute.Enumeration<
      ['Low', 'Important', 'Moderate', 'Critical']
    >;
    equiposId: Schema.Attribute.String;
    grupos: Schema.Attribute.String;
    nombre: Schema.Attribute.String;
    Tipos: Schema.Attribute.String;
  };
}

export interface SharedBayunca extends Struct.ComponentSchema {
  collectionName: 'components_shared_bayuncas';
  info: {
    displayName: 'Bayunca';
    icon: 'store';
  };
  attributes: {
    nombrePlanta: Schema.Attribute.String;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'planta-bayunca.equipos-bayunca': PlantaBayuncaEquiposBayunca;
      'shared.bayunca': SharedBayunca;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
