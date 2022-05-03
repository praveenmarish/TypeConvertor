var a = [
  {
    name: 'userName',
    value: 'Marish',
  },
  {
    name: 'age',
    value: '12',
  },
  {
    name: 'lang',
    value: 'eng',
  },
  {
    name: 'lang',
    value: 'tam',
  },
  {
    name: 'lang',
    value: 'hin',
  },
];

var res = {};

a.map((item, _i) => {
  if (res[item.name]) {
    res[item.name] =
      typeof res[item.name] == 'string'
        ? [res[item.name], item.value]
        : [...res[item.name], item.value];
  } else {
    res[item.name] = item.value;
  }
});

console.log(a, res);
