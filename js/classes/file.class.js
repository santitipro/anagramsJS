class File {

  constructor(file) {
    this.file = file;
  }

  async getFileContent() {
    let fileData = await this.readFile(this.file);
    return fileData;
  }

  readFile(file) {
    return new Promise((resolve, reject) => {
      fetch(file).then(res => res.text()).then(content => {
        let lines = content.split(/\n/);
        resolve(lines);
      });
    });
  }

}
