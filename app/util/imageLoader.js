const landscapes = [
    '/assets/home/Landscape-HmpstdHth-1.jpg',
    '/assets/home/Landscape-HmpstdHth-2.jpg',
    '/assets/home/Landscape-HmpstdHth-3.jpg'
  ];
  
  const albania = [
    '/assets/albania/albania_001.jpg', '/assets/albania/albania_007.jpg', '/assets/albania/albania_013.jpg',
    '/assets/albania/albania_019.jpg', '/assets/albania/albania_025.jpg', '/assets/albania/albania_002.jpg',
    '/assets/albania/albania_008.jpg', '/assets/albania/albania_014.jpg', '/assets/albania/albania_020.jpg',
    '/assets/albania/albania_026.jpg', '/assets/albania/albania_003.jpg', '/assets/albania/albania_009.jpg',
    '/assets/albania/albania_015.jpg', '/assets/albania/albania_021.jpg', '/assets/albania/albania_027.jpg',
    '/assets/albania/albania_004.jpg', '/assets/albania/albania_010.jpg', '/assets/albania/albania_016.jpg',
    '/assets/albania/albania_022.jpg', '/assets/albania/albania_028.jpg', '/assets/albania/albania_005.jpg',
    '/assets/albania/albania_011.jpg', '/assets/albania/albania_017.jpg', '/assets/albania/albania_023.jpg',
    '/assets/albania/albania_029.jpg', '/assets/albania/albania_006.jpg', '/assets/albania/albania_012.jpg',
    '/assets/albania/albania_018.jpg', '/assets/albania/albania_024.jpg'
  ];
const getLandscape = (index) => {
    if (index < 0) {
      return landscapes[landscapes.length + index];
    }
    return landscapes[index];
  };

const getAlbania = (index) => {
    if (index < 0) {
      return albania[albania.length + index];
    }
    return albania[index];
  };

export { landscapes, getLandscape, albania, getAlbania };