function nextVersion(currentVersion) {
  let data = currentVersion.split('.');
  for (let i = data.length - 1; i >= 0; i -= 1) {
      const nextVersion = Number(data[i]) + 1;
      if (nextVersion === 10 && i !== 0) {
          data[i] = 0;
      } else {
          data[i] = nextVersion;
          return data.join('.');
      }
  }
}

console.log(nextVersion('1.2.3') === '1.2.4');
console.log(nextVersion('0.9.9') === '1.0.0');
console.log(nextVersion('1') === '2');
console.log(nextVersion('1.2.3.4.5.6.7.8') === '1.2.3.4.5.6.7.9');
console.log(nextVersion('9.9') === '10.0');