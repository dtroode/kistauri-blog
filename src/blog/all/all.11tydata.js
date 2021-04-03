module.exports = {
  eleventyComputed: {
    related: (data) => {
      let notesList = {}; // initialize list of notes
      let count = 0; // count of notes
      let imagesCount = 0; // count of notes with preview image

      // for each tag in current page tags
      for (tag of data.tags) {
        // remove occurrence of "blog" tag
        if (tag != "blog") {
          // for each note with this tag
          for (item of data.collections[tag]) {
            // if this note isn't a current note
            if (item.data.title != data.title) {
              if (notesList.hasOwnProperty(item.data.title)) {
                // if we already counted this note, just increase rating
                notesList[item.data.title]["rating"] += 1;
              } else {
                // if it's a first occurrence of this note
                // - create object with note name
                // - add a rating with value 1
                // - add the note url
                // - add the note date
                notesList[item.data.title] = {};
                notesList[item.data.title]["rating"] = 1;
                notesList[item.data.title]["url"] = item.data.page.url;
                notesList[item.data.title]["date"] = item.data.page.date;
                notesList[item.data.title]["description"] =
                  item.data.description;

                if (item.data.favourite) {
                  // if the note has a favourite tag
                  // increase rating
                  notesList[item.data.title]["rating"] += 1;
                }

                if (item.data.image) {
                  // if the note has a preview image add it
                  notesList[item.data.title]["image"] = item.data.image;
                }
              }
            }
          }
        }
      }

      let sortable = []; // initialize empty sorted array

      // iterate through notes from list
      // and push them to the array
      for (let note in notesList) {
        notesList[note]["image"]
          ? sortable.push([
              note,
              notesList[note]["rating"],
              notesList[note]["url"],
              notesList[note]["date"],
              notesList[note]["description"],
              notesList[note]["image"],
            ])
          : sortable.push([
              note,
              notesList[note]["rating"],
              notesList[note]["url"],
              notesList[note]["date"],
              notesList[note]["description"],
            ]);
      }

      // sort the array by note's rating
      sortable.sort(function (a, b) {
        return b[1] - a[1];
      });

      let out = {}; // initialize final notes list object

      // select first five notes from the array
      for (item of sortable.slice(0, 5)) {
        // increase counter of notes
        count++;

        // initialize an object item and add
        // rating, url and date
        out[item[0]] = {};
        out[item[0]]["rating"] = item[1];
        out[item[0]]["url"] = item[2];
        out[item[0]]["date"] = item[3];
        out[item[0]]["description"] = item[4];

        if (item[5] && count < 3) {
          // if the note has a preview image
          // and there's less than three notes
          // with images, add it
          // increace counter of notes with images
          imagesCount++;
          out[item[0]]["image"] = item[5];
        }
      }

      // add a type to out object
      // type contains information about
      // the number of notes and
      // the number of notes with a preview image
      out["type"] = "a" + count + " i" + imagesCount;

      return out;
    },
  },
};
