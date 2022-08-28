<script setup>
const e = 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ctv0my.jpg';
function r(e, t) {
  return t
    .map(function (width) {
      var height = Math.floor((width / 16) * 9);
      return ''.concat(e.replace('{recipe}', ''.concat(width, 'x').concat(height)), ' ').concat(width, 'w');
    })
    .join(',');
}

const sizes = [
  {
    media: '(min-width: 1280px)',
    sizes: '1248px',
    srcset: r(e, [1248, 1872]),
  },
  {
    media: '(min-width: 1008px) and (max-width: 1279px)',
    sizes: '976px',
    srcset: r(e, [976, 1472]),
  },
  {
    media: '(min-width: 600px) and (max-width: 1007px)',
    sizes: 'calc(100vw - 32px)',
    srcset: r(e, [976, 1472]),
  },
  {
    media: '(min-width: 400px) and (max-width: 599px)',
    sizes: 'calc(100vw - 32px)',
    srcset: r(e, [576, 864]),
  },
  {
    media: '(max-width: 399px)',
    sizes: 'calc(100vw - 16px)',
    srcset: r(e, [368, 560]),
  },
];
</script>
