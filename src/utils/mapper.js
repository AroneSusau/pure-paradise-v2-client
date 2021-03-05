const key = new Map();
key.set(0, "<span class='text-secondary text-monospace grass'>**</span>");
key.set(1, "<span class='text-secondary text-monospace grass'>~~</span>");
key.set(2, "<span class='text-secondary text-monospace grass'>^^</span>");
key.set(3, "<span class='text-secondary text-monospace road'>..</span>");
key.set(4, "<span class='text-secondary text-monospace wood'>||</span>");
key.set(5, "<span class='text-secondary text-monospace wood'>__</span>");
key.set(6, "<span class='text-secondary text-monospace wood'>--</span>");
key.set(7, "<span class='text-secondary text-monospace'>[[</span>");
key.set(8, "<span class='text-secondary text-monospace'>]]</span>");
key.set(9, "<span class='text-secondary text-monospace'>++</span>");
key.set(10, "<span class='text-secondary text-monospace wood'>//</span>");
key.set(11, "<span class='text-secondary text-monospace wood'>\\\\</span>");
key.set(12, "<span class='text-secondary text-monospace'>==</span>");
key.set(13, "<span class='text-monospace objective'>??</span>");
key.set(14, "<span class='text-secondary text-monospace'>00</span>");
key.set(15, "<span class='text-secondary text-monospace'>@@</span>");
key.set(16, "<span class='text-secondary text-monospace'>>></span>");
key.set(17, "<span class='text-secondary text-monospace'>>></span>");
key.set(18, "<span class='text-secondary text-monospace'><<</span>");
key.set(20, "<span class='text-secondary text-monospace wood'>))</span>");
key.set(21, "<span class='text-secondary text-monospace wood'>((</span>");
key.set(73, "<span class='text-secondary text-monospace sign'>D </span>");
key.set(76, "<span class='text-secondary text-monospace sign'>G </span>");
key.set(84, "<span class='text-secondary text-monospace sign'>O </span>");
key.set(88, "<span class='text-secondary text-monospace sign'>S </span>");
key.set(89, "<span class='text-secondary text-monospace'>PP</span>");
key.set(90, "<span class='text-secondary text-monospace'>PP</span>");

const mapper = {
  parse(raw) {
    return raw.map(value => {
      return key.get(value);
    });
  }
};

export default mapper;
