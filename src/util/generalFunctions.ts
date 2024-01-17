export const convertToKorM = (num: number | undefined) => {
  if (num !== undefined && typeof num === 'number') {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + 'B';
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    } else {
      return parseFloat(num.toFixed(1));
    }
  } else {
    return 0;
  }
}

export const getBase64Image = (bufferData: any) => {
  if (bufferData !== null && bufferData.data !== undefined) {
    const buffer = new Uint8Array(bufferData.data);
    let binary = '';
    for (let byte of buffer) {
      binary += String.fromCharCode(byte);
    }
    const base64 = window.btoa(binary);
    return `data:image/jpeg;base64,${base64}`;
  } else {
    // handle error or return a default value
    console.error('bufferData is null or does not have a data property');
    return ''; // or whatever default value makes sense in your case
  }
};