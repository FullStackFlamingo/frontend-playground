import { useMemo } from 'react';
import slugify from 'slugify';
import styled from 'styled-components';
import { ResponsiveImage } from '../components-global/ResponsiveImage';

const BundleEntityRoot = styled.a`
  &:focus,
  &:hover {
    outline: none;
    .bundle-entity__image {
      outline: 2px solid #fff;
    }
  }
`;
const BundleEntityResponsiveImage = styled(ResponsiveImage)`
  ${BundleEntityRoot}:focus &,
  ${BundleEntityRoot}:hover & {
    outline: 2px solid #fff;
  }
`;
const BundleEntityTitle = styled.h3`
  margin-top: calc(var(--size-base-unit) * 2);
`;
interface BundleEntityProps {
  type: string;
  entity: IPlayer.BundleEntity;
  onFocus: React.FocusEventHandler<HTMLAnchorElement>;
}
export function BundleEntity({ entity, type, onFocus }: BundleEntityProps) {
  const href = useMemo(() => {
    const slug = slugify(entity.episode.title.default);
    return `/iplayer/episode/${entity.episode.previewId}/${slug}`;
  }, [entity]);
  const synopsis = useMemo(() => entity.episode.synopsis.small || entity.episode.synopsis.editorial, [entity]);
  const ariaLabel = useMemo(() => entity.episode.title.default + 'Description: ' + synopsis, [entity]);

  const imageRecipe = useMemo(() => {
    switch (type) {
      case 'portrait':
        return entity.episode.image.portrait ?? entity.episode.image.default;
      default:
        return entity.episode.image.promotional ?? entity.episode.image.default;
    }
  }, [entity]);

  return (
    <BundleEntityRoot href={href} aria-label={ariaLabel} onFocus={onFocus}>
      <BundleEntityResponsiveImage type={type} recipe={imageRecipe} />
      <BundleEntityTitle className="font--bold font--size-1">{entity.episode.title.default}</BundleEntityTitle>
    </BundleEntityRoot>
  );
}
