const _0x23129f = _0x1c61;
(function (_0x4ebcf1, _0x18c88c) {
  const _0x38b650 = _0x1c61,
    _0x5b0864 = _0x4ebcf1();
  while (!![]) {
    try {
      const _0x7aa032 =
        (parseInt(_0x38b650(0x1b5)) / 0x1) *
          (parseInt(_0x38b650(0x1cf)) / 0x2) +
        (parseInt(_0x38b650(0x224)) / 0x3) *
          (parseInt(_0x38b650(0x20e)) / 0x4) +
        parseInt(_0x38b650(0x1af)) / 0x5 +
        parseInt(_0x38b650(0x1a3)) / 0x6 +
        parseInt(_0x38b650(0x1f6)) / 0x7 +
        parseInt(_0x38b650(0x1e1)) / 0x8 +
        -parseInt(_0x38b650(0x1e4)) / 0x9;
      if (_0x7aa032 === _0x18c88c) break;
      else _0x5b0864["push"](_0x5b0864["shift"]());
    } catch (_0x4953b6) {
      _0x5b0864["push"](_0x5b0864["shift"]());
    }
  }
})(_0x168f, 0xcbc8d),
  require(_0x23129f(0x19a));
const pino = require(_0x23129f(0x205)),
  { Boom } = require(_0x23129f(0x225)),
  fs = require("fs"),
  moment = require(_0x23129f(0x232)),
  chalk = require(_0x23129f(0x214)),
  FileType = require("file-type"),
  path = require(_0x23129f(0x1cd)),
  axios = require(_0x23129f(0x1c4)),
  Config = require(_0x23129f(0x19a)),
  PhoneNumber = require(_0x23129f(0x197)),
  { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require(
    _0x23129f(0x1ef),
  ),
  {
    smsg,
    isUrl,
    generateMessageTag,
    getBuffer,
    getSizeMedia,
    fetch,
    await,
    sleep,
    reSize,
  } = require(_0x23129f(0x1e7)),
  {
    default: MariaConnect,
    delay,
    PHONENUMBER_MCC,
    makeCacheableSignalKeyStore,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeInMemoryStore,
    getAggregateVotesInPollMessage,
    jidDecode,
    proto,
    Browsers,
  } = require("@whiskeysockets/baileys"),
  NodeCache = require(_0x23129f(0x23d)),
  Pino = require(_0x23129f(0x205)),
  readline = require(_0x23129f(0x1d8)),
  { parsePhoneNumber } = require("libphonenumber-js"),
  prefix = global[_0x23129f(0x229)] || ".",
  makeWASocket = require(_0x23129f(0x252))[_0x23129f(0x22a)],
  store = makeInMemoryStore({
    logger: pino()[_0x23129f(0x1ff)]({
      level: "silent",
      stream: _0x23129f(0x20c),
    }),
  });
let phoneNumber = _0x23129f(0x1fa),
  owner = JSON[_0x23129f(0x1b3)](fs[_0x23129f(0x22d)](_0x23129f(0x1b0)));
const pairingCode =
    !!phoneNumber || process[_0x23129f(0x23c)]["includes"](_0x23129f(0x239)),
  useMobile = process[_0x23129f(0x23c)][_0x23129f(0x209)](_0x23129f(0x19c)),
  rl = readline["createInterface"]({
    input: process[_0x23129f(0x250)],
    output: process["stdout"],
  }),
  question = (_0x1cba95) =>
    new Promise((_0x30b93f) => rl["question"](_0x1cba95, _0x30b93f));
async function startMaria() {
  const _0x2ec343 = _0x23129f;
  let { version: _0x589151, isLatest: _0x1ed0c8 } =
    await fetchLatestBaileysVersion();
  const { state: _0x421c0e, saveCreds: _0x47db4f } =
      await useMultiFileAuthState(_0x2ec343(0x1d6)),
    _0x533ee2 = new NodeCache(),
    _0x3441a2 = makeWASocket({
      logger: pino({ level: _0x2ec343(0x1bd) }),
      printQRInTerminal: !pairingCode,
      mobile: useMobile,
      browser: Browsers[_0x2ec343(0x242)](_0x2ec343(0x20d)),
      auth: _0x421c0e,
      markOnlineOnConnect: !![],
      generateHighQualityLinkPreview: !![],
      getMessage: async (_0x6111b0) => {
        const _0x20c82a = _0x2ec343;
        let _0x1bdca4 = jidNormalizedUser(_0x6111b0[_0x20c82a(0x226)]),
          _0x5afb16 = await store[_0x20c82a(0x1e3)](_0x1bdca4, _0x6111b0["id"]);
        return _0x5afb16?.["message"] || "";
      },
      msgRetryCounterCache: _0x533ee2,
      defaultQueryTimeoutMs: undefined,
    });
  store[_0x2ec343(0x253)](_0x3441a2["ev"]);
  if (
    pairingCode &&
    !_0x3441a2[_0x2ec343(0x1b1)][_0x2ec343(0x1c3)][_0x2ec343(0x1d5)]
  ) {
    if (useMobile) throw new Error(_0x2ec343(0x195));
    let _0x30717c;
    !!_0x30717c
      ? ((_0x30717c = _0x30717c[_0x2ec343(0x23a)](/[^0-9]/g, "")),
        !Object[_0x2ec343(0x1b9)](PHONENUMBER_MCC)[_0x2ec343(0x200)](
          (_0x3aac7d) => _0x30717c[_0x2ec343(0x1ee)](_0x3aac7d),
        ) &&
          (console[_0x2ec343(0x22c)](
            chalk[_0x2ec343(0x1b4)](
              chalk[_0x2ec343(0x1eb)](
                "Start\x20with\x20country\x20code\x20of\x20your\x20WhatsApp\x20Number,\x20Example\x20:\x20+919931122319",
              ),
            ),
          ),
          process[_0x2ec343(0x251)](0x0)))
      : ((_0x30717c = await question(
          chalk[_0x2ec343(0x1b4)](chalk["greenBright"](_0x2ec343(0x212))),
        )),
        (_0x30717c = _0x30717c["replace"](/[^0-9]/g, "")),
        !Object[_0x2ec343(0x1b9)](PHONENUMBER_MCC)[_0x2ec343(0x200)](
          (_0x5448f1) => _0x30717c[_0x2ec343(0x1ee)](_0x5448f1),
        ) &&
          (console["log"](
            chalk[_0x2ec343(0x1b4)](
              chalk[_0x2ec343(0x1eb)](
                "Start\x20with\x20country\x20code\x20of\x20your\x20WhatsApp\x20Number,\x20Example\x20:\x20+919931122319",
              ),
            ),
          ),
          (_0x30717c = await question(
            chalk[_0x2ec343(0x1b4)](chalk[_0x2ec343(0x246)](_0x2ec343(0x211))),
          )),
          (_0x30717c = _0x30717c["replace"](/[^0-9]/g, "")),
          rl["close"]())),
      setTimeout(async () => {
        const _0x26dc1e = _0x2ec343;
        let _0x44417c = await _0x3441a2["requestPairingCode"](_0x30717c);
        (_0x44417c =
          _0x44417c?.["match"](/.{1,4}/g)?.[_0x26dc1e(0x1ab)]("-") ||
          _0x44417c),
          console[_0x26dc1e(0x22c)](
            chalk[_0x26dc1e(0x1a5)](chalk["bgGreen"](_0x26dc1e(0x1ca))),
            chalk["black"](chalk[_0x26dc1e(0x235)](_0x44417c)),
          );
      }, 0xbb8);
  }
  _0x3441a2["ev"]["on"](_0x2ec343(0x1cc), (_0x3b8096) => {
    const _0x4479ab = _0x2ec343;
    for (let _0xe0f6d1 of _0x3b8096) {
      let _0x3ac5c2 = _0x3441a2[_0x4479ab(0x1d2)](_0xe0f6d1["id"]);
      if (store && store[_0x4479ab(0x24c)])
        store["contacts"][_0x3ac5c2] = {
          id: _0x3ac5c2,
          name: _0xe0f6d1[_0x4479ab(0x1a6)],
        };
    }
  }),
    _0x3441a2["ev"]["on"](_0x2ec343(0x1a2), async (_0xa66ed3) => {
      const _0x410f60 = _0x2ec343;
      try {
        const _0x4b8ab2 = _0xa66ed3[_0x410f60(0x202)][0x0];
        if (!_0x4b8ab2["message"]) return;
        _0x4b8ab2["message"] =
          Object[_0x410f60(0x1b9)](_0x4b8ab2[_0x410f60(0x1fd)])[0x0] ===
          _0x410f60(0x1be)
            ? _0x4b8ab2["message"]["ephemeralMessage"]["message"]
            : _0x4b8ab2[_0x410f60(0x1fd)];
        _0x4b8ab2["key"] &&
          _0x4b8ab2["key"][_0x410f60(0x226)] === "status@broadcast" &&
          autoread_status &&
          (await _0x3441a2["readMessages"]([_0x4b8ab2[_0x410f60(0x201)]]));
        if (
          !_0x3441a2["public"] &&
          !_0x4b8ab2[_0x410f60(0x201)][_0x410f60(0x1a1)] &&
          _0xa66ed3[_0x410f60(0x21a)] === _0x410f60(0x1a6)
        )
          return;
        if (
          _0x4b8ab2[_0x410f60(0x201)]["id"][_0x410f60(0x1ee)]("BAE5") &&
          _0x4b8ab2[_0x410f60(0x201)]["id"][_0x410f60(0x1cb)] === 0x10
        )
          return;
        const _0x4c940a = smsg(_0x3441a2, _0x4b8ab2, store);
        require("./Anna-Md")(_0x3441a2, _0x4c940a, _0xa66ed3, store);
      } catch (_0x287ff2) {
        console[_0x410f60(0x22c)](_0x287ff2);
      }
    }),
    (_0x3441a2[_0x2ec343(0x1bf)] = async (
      _0x529c00,
      _0x4c5ec7,
      _0x3a4dbc = "",
      _0x50fdae = {},
    ) => {
      const _0x21377e = _0x2ec343;
      let _0x48867f = [];
      for (let _0x517e58 of _0x4c5ec7) {
        _0x48867f[_0x21377e(0x24b)]({
          displayName: await _0x3441a2[_0x21377e(0x220)](
            _0x517e58 + _0x21377e(0x24d),
          ),
          vcard:
            _0x21377e(0x249) +
            (await _0x3441a2[_0x21377e(0x220)](_0x517e58 + "@s.whatsapp.net")) +
            _0x21377e(0x1b2) +
            (await _0x3441a2[_0x21377e(0x220)](_0x517e58 + _0x21377e(0x24d))) +
            "\x0aitem1.TEL;waid=" +
            _0x517e58 +
            ":" +
            _0x517e58 +
            _0x21377e(0x223),
        });
      }
      _0x3441a2[_0x21377e(0x196)](
        _0x529c00,
        {
          contacts: { displayName: global["ownername"], contacts: _0x48867f },
          ..._0x50fdae,
        },
        { quoted: _0x3a4dbc },
      );
    }),
    (_0x3441a2[_0x2ec343(0x1d2)] = (_0x4aa0b4) => {
      const _0x49c44 = _0x2ec343;
      if (!_0x4aa0b4) return _0x4aa0b4;
      if (/:\d+@/gi[_0x49c44(0x20b)](_0x4aa0b4)) {
        let _0x3ae4e2 = jidDecode(_0x4aa0b4) || {};
        return (
          (_0x3ae4e2[_0x49c44(0x21e)] &&
            _0x3ae4e2[_0x49c44(0x1ec)] &&
            _0x3ae4e2["user"] + "@" + _0x3ae4e2[_0x49c44(0x1ec)]) ||
          _0x4aa0b4
        );
      } else return _0x4aa0b4;
    }),
    _0x3441a2["ev"]["on"](_0x2ec343(0x1cc), (_0x461195) => {
      const _0x125b35 = _0x2ec343;
      for (let _0x285cad of _0x461195) {
        let _0x3ba1dc = _0x3441a2[_0x125b35(0x1d2)](_0x285cad["id"]);
        if (store && store[_0x125b35(0x24c)])
          store[_0x125b35(0x24c)][_0x3ba1dc] = {
            id: _0x3ba1dc,
            name: _0x285cad[_0x125b35(0x1a6)],
          };
      }
    }),
    (_0x3441a2[_0x2ec343(0x220)] = (_0x29abe5, _0x48d0d3 = ![]) => {
      const _0x3b922d = _0x2ec343;
      (id = _0x3441a2[_0x3b922d(0x1d2)](_0x29abe5)),
        (_0x48d0d3 = _0x3441a2[_0x3b922d(0x1da)] || _0x48d0d3);
      let _0x156b7c;
      if (id[_0x3b922d(0x1bc)](_0x3b922d(0x22b)))
        return new Promise(async (_0x1a99e9) => {
          const _0x5b831b = _0x3b922d;
          _0x156b7c = store[_0x5b831b(0x24c)][id] || {};
          if (!(_0x156b7c["name"] || _0x156b7c["subject"]))
            _0x156b7c = _0x3441a2[_0x5b831b(0x1aa)](id) || {};
          _0x1a99e9(
            _0x156b7c[_0x5b831b(0x1c7)] ||
              _0x156b7c[_0x5b831b(0x21c)] ||
              PhoneNumber("+" + id[_0x5b831b(0x23a)](_0x5b831b(0x24d), ""))[
                _0x5b831b(0x1c2)
              ]("international"),
          );
        });
      else
        _0x156b7c =
          id === "0@s.whatsapp.net"
            ? { id: id, name: _0x3b922d(0x1f9) }
            : id ===
                _0x3441a2[_0x3b922d(0x1d2)](_0x3441a2[_0x3b922d(0x21e)]["id"])
              ? _0x3441a2[_0x3b922d(0x21e)]
              : store["contacts"][id] || {};
      return (
        (_0x48d0d3 ? "" : _0x156b7c["name"]) ||
        _0x156b7c["subject"] ||
        _0x156b7c[_0x3b922d(0x254)] ||
        PhoneNumber("+" + _0x29abe5[_0x3b922d(0x23a)]("@s.whatsapp.net", ""))[
          _0x3b922d(0x1c2)
        ]("international")
      );
    }),
    (_0x3441a2[_0x2ec343(0x1d9)] = !![]),
    (_0x3441a2[_0x2ec343(0x228)] = (_0x146125) =>
      smsg(_0x3441a2, _0x146125, store)),
    _0x3441a2["ev"]["on"](_0x2ec343(0x231), async (_0x191c7b) => {
      const _0x12264d = _0x2ec343,
        { connection: _0x5d424, lastDisconnect: _0x2fd347 } = _0x191c7b;
      if (_0x5d424 == "open") {
        console[_0x12264d(0x22c)](
          chalk["green"]("\x1a🟨Welcome\x20to\x20Maria-md"),
        ),
          console["log"](chalk[_0x12264d(0x1a9)](_0x12264d(0x1ce))),
          await delay(0x3e8 * 0x2),
          console["log"](chalk[_0x12264d(0x243)](_0x12264d(0x247))),
          _0x3441a2[_0x12264d(0x196)](_0x3441a2[_0x12264d(0x21e)]["id"], {
            text:
              _0x12264d(0x1f8) +
              prefix +
              _0x12264d(0x193) +
              prefix +
              _0x12264d(0x22f),
          });
        const _0x3b5bad = [
          _0x12264d(0x1e6),
          _0x12264d(0x208),
          _0x12264d(0x207),
          _0x12264d(0x221),
          _0x12264d(0x1ea),
        ];
        let _0x19d0da = 0x0;
        function _0x16caeb() {
          const _0x2d80e4 = _0x12264d,
            _0x489d12 = _0x3b5bad[_0x19d0da];
          console[_0x2d80e4(0x22c)](
            chalk[_0x2d80e4(0x1f0)](_0x489d12)(_0x2d80e4(0x237)),
          ),
            (_0x19d0da = (_0x19d0da + 0x1) % _0x3b5bad[_0x2d80e4(0x1cb)]),
            setTimeout(_0x16caeb, 0xea60);
        }
        _0x16caeb();
      }
      _0x5d424 === _0x12264d(0x1c1) &&
        _0x2fd347 &&
        _0x2fd347["error"] &&
        _0x2fd347[_0x12264d(0x1dc)][_0x12264d(0x20f)][_0x12264d(0x1de)] !=
          0x191 &&
        startMaria();
    }),
    _0x3441a2["ev"]["on"]("creds.update", _0x47db4f),
    _0x3441a2["ev"]["on"](_0x2ec343(0x1a2), () => {}),
    (_0x3441a2[_0x2ec343(0x1b6)] = (
      _0x501867,
      _0x30e52c,
      _0x2acda9 = "",
      _0x321003,
    ) =>
      _0x3441a2[_0x2ec343(0x196)](
        _0x501867,
        { text: _0x30e52c, ..._0x321003 },
        { quoted: _0x2acda9, ..._0x321003 },
      )),
    (_0x3441a2["sendTextWithMentions"] = async (
      _0x33faf3,
      _0x26be01,
      _0x3cc06f,
      _0x354892 = {},
    ) =>
      _0x3441a2["sendMessage"](
        _0x33faf3,
        {
          text: _0x26be01,
          mentions: [..._0x26be01[_0x2ec343(0x233)](/@(\d{0,16})/g)][
            _0x2ec343(0x1d0)
          ]((_0x11e639) => _0x11e639[0x1] + _0x2ec343(0x24d)),
          ..._0x354892,
        },
        { quoted: _0x3cc06f },
      ));
  async function _0x30d126(_0x1b15ef, _0x12d93e) {
    const _0x3436ae = _0x2ec343;
    let _0x2d5805 = await generateWAMessage(
      m?.[_0x3436ae(0x1e5)],
      { text: _0x1b15ef, mentions: m?.["mentionedJid"] },
      {
        userJid: _0x3441a2[_0x3436ae(0x21e)]["id"],
        quoted: m?.[_0x3436ae(0x24a)] && m?.["quoted"][_0x3436ae(0x234)],
      },
    );
    (_0x2d5805[_0x3436ae(0x201)][_0x3436ae(0x1a1)] = areJidsSameUser(
      m?.[_0x3436ae(0x24f)],
      _0x3441a2["user"]["id"],
    )),
      (_0x2d5805[_0x3436ae(0x201)]["id"] = m?.["key"]["id"]),
      (_0x2d5805[_0x3436ae(0x1dd)] = m?.[_0x3436ae(0x1dd)]);
    if (m?.[_0x3436ae(0x1df)])
      _0x2d5805[_0x3436ae(0x203)] = m?.[_0x3436ae(0x24f)];
    let _0x56c89d = {
      ..._0x12d93e,
      messages: [proto[_0x3436ae(0x1a7)][_0x3436ae(0x1c9)](_0x2d5805)],
      type: _0x3436ae(0x218),
    };
    _0x3441a2["ev"][_0x3436ae(0x1c5)](_0x3436ae(0x1a2), _0x56c89d);
  }
  (_0x3441a2[_0x2ec343(0x1a8)] = async (
    _0x551c42,
    _0x2610bb,
    _0x51acc9,
    _0x3f324c = {},
  ) => {
    const _0x4c60f9 = _0x2ec343;
    let _0x8e2aba = Buffer[_0x4c60f9(0x1a4)](_0x2610bb)
        ? _0x2610bb
        : /^data:.*?\/.*?;base64,/i[_0x4c60f9(0x20b)](_0x2610bb)
          ? Buffer["from"](_0x2610bb["split"]`,`[0x1], _0x4c60f9(0x1d3))
          : /^https?:\/\//[_0x4c60f9(0x20b)](_0x2610bb)
            ? await await getBuffer(_0x2610bb)
            : fs["existsSync"](_0x2610bb)
              ? fs[_0x4c60f9(0x22d)](_0x2610bb)
              : Buffer["alloc"](0x0),
      _0x59c4f9;
    return (
      _0x3f324c && (_0x3f324c[_0x4c60f9(0x23b)] || _0x3f324c[_0x4c60f9(0x20a)])
        ? (_0x59c4f9 = await writeExifImg(_0x8e2aba, _0x3f324c))
        : (_0x59c4f9 = await imageToWebp(_0x8e2aba)),
      await _0x3441a2["sendMessage"](
        _0x551c42,
        { sticker: { url: _0x59c4f9 }, ..._0x3f324c },
        { quoted: _0x51acc9 },
      ),
      _0x59c4f9
    );
  }),
    (_0x3441a2[_0x2ec343(0x1d4)] = async (
      _0x5b39b9,
      _0x2a215e,
      _0x45d27e,
      _0x4bbcab = {},
    ) => {
      const _0x58669a = _0x2ec343;
      let _0x47024d = Buffer[_0x58669a(0x1a4)](_0x2a215e)
          ? _0x2a215e
          : /^data:.*?\/.*?;base64,/i[_0x58669a(0x20b)](_0x2a215e)
            ? Buffer[_0x58669a(0x204)](
                _0x2a215e["split"]`,`[0x1],
                _0x58669a(0x1d3),
              )
            : /^https?:\/\//["test"](_0x2a215e)
              ? await await getBuffer(_0x2a215e)
              : fs[_0x58669a(0x1e9)](_0x2a215e)
                ? fs["readFileSync"](_0x2a215e)
                : Buffer[_0x58669a(0x199)](0x0),
        _0xe1acc3;
      return (
        _0x4bbcab &&
        (_0x4bbcab[_0x58669a(0x23b)] || _0x4bbcab[_0x58669a(0x20a)])
          ? (_0xe1acc3 = await writeExifVid(_0x47024d, _0x4bbcab))
          : (_0xe1acc3 = await videoToWebp(_0x47024d)),
        await _0x3441a2[_0x58669a(0x196)](
          _0x5b39b9,
          { sticker: { url: _0xe1acc3 }, ..._0x4bbcab },
          { quoted: _0x45d27e },
        ),
        _0xe1acc3
      );
    }),
    (_0x3441a2["downloadAndSaveMediaMessage"] = async (
      _0x4d360d,
      _0x520879,
      _0x4d3db3 = !![],
    ) => {
      const _0x23642a = _0x2ec343;
      let _0x2636af = _0x4d360d[_0x23642a(0x24e)]
          ? _0x4d360d["msg"]
          : _0x4d360d,
        _0x184424 =
          (_0x4d360d[_0x23642a(0x24e)] || _0x4d360d)[_0x23642a(0x1f7)] || "",
        _0x2564db = _0x4d360d[_0x23642a(0x19f)]
          ? _0x4d360d[_0x23642a(0x19f)][_0x23642a(0x23a)](/Message/gi, "")
          : _0x184424[_0x23642a(0x1b7)]("/")[0x0];
      const _0x34e18a = await downloadContentFromMessage(_0x2636af, _0x2564db);
      let _0x578505 = Buffer[_0x23642a(0x204)]([]);
      for await (const _0x51cfb0 of _0x34e18a) {
        _0x578505 = Buffer[_0x23642a(0x240)]([_0x578505, _0x51cfb0]);
      }
      let _0x2088d9 = await FileType["fromBuffer"](_0x578505);
      return (
        (trueFileName = _0x4d3db3
          ? _0x520879 + "." + _0x2088d9["ext"]
          : _0x520879),
        await fs["writeFileSync"](trueFileName, _0x578505),
        trueFileName
      );
    });
  async function _0x192bcd(_0x35bbf9) {
    const _0x23bb93 = _0x2ec343;
    if (store) {
      const _0x14942d = await store[_0x23bb93(0x1e3)](
        _0x35bbf9["remoteJid"],
        _0x35bbf9["id"],
      );
      return _0x14942d?.[_0x23bb93(0x1fd)];
    }
    return { conversation: _0x23bb93(0x1db) };
  }
  _0x3441a2["ev"]["on"](_0x2ec343(0x23e), async (_0x2469ec) => {
    const _0x492e09 = _0x2ec343;
    for (const { key: _0x2e1fa2, update: _0x1814c9 } of _0x2469ec) {
      if (_0x1814c9["pollUpdates"] && _0x2e1fa2[_0x492e09(0x1a1)]) {
        const _0x561afe = await _0x192bcd(_0x2e1fa2);
        if (_0x561afe) {
          const _0x568b06 = await getAggregateVotesInPollMessage({
            message: _0x561afe,
            pollUpdates: _0x1814c9["pollUpdates"],
          });
          var _0x43965f = _0x568b06["filter"](
            (_0x944fde) =>
              _0x944fde[_0x492e09(0x19b)][_0x492e09(0x1cb)] !== 0x0,
          )[0x0]?.["name"];
          if (_0x43965f == undefined) return;
          var _0x3b177c = xprefix + _0x43965f;
          _0x3441a2[_0x492e09(0x216)](_0x3b177c, _0x2469ec);
        }
      }
    }
  }),
    (_0x3441a2[_0x2ec343(0x1d7)] = (
      _0x561d9f,
      _0x3d99c9 = "",
      _0x1a7aa4 = [],
      _0x4674ca = 0x1,
    ) => {
      const _0x3d81d6 = _0x2ec343;
      return _0x3441a2[_0x3d81d6(0x196)](_0x561d9f, {
        poll: {
          name: _0x3d99c9,
          values: _0x1a7aa4,
          selectableCount: _0x4674ca,
        },
      });
    }),
    _0x3441a2["ev"]["on"](_0x2ec343(0x1fe), async (_0x416340) => {
      const _0x7ec7b5 = _0x2ec343;
      if (global[_0x7ec7b5(0x236)]) {
        console[_0x7ec7b5(0x22c)](_0x416340);
        try {
          let _0x1bb744 = await _0x3441a2[_0x7ec7b5(0x1aa)](_0x416340["id"]),
            _0x4d6b6d = _0x416340[_0x7ec7b5(0x1e8)];
          for (let _0x433cb7 of _0x4d6b6d) {
            try {
              ppuser = await _0x3441a2["profilePictureUrl"](_0x433cb7, "image");
            } catch (_0x3b45a6) {
              ppuser = _0x7ec7b5(0x1e0);
            }
            try {
              ppgroup = await _0x3441a2[_0x7ec7b5(0x1ad)](
                _0x416340["id"],
                "image",
              );
            } catch (_0x5eb034) {
              ppgroup = _0x7ec7b5(0x1f1);
            }
            (memb = _0x1bb744[_0x7ec7b5(0x1e8)][_0x7ec7b5(0x1cb)]),
              (MariaWlcm = await getBuffer(_0x7ec7b5(0x1e0))),
              (MariaLft = await getBuffer(_0x7ec7b5(0x1a0)));
            if (_0x416340[_0x7ec7b5(0x241)] == _0x7ec7b5(0x1ae)) {
              const _0x3017f3 = await getBuffer(ppuser);
              let _0x43e71f = _0x433cb7;
              const _0x5bfd43 = moment["tz"](_0x7ec7b5(0x245))[
                  _0x7ec7b5(0x21d)
                ](_0x7ec7b5(0x21f)),
                _0x17c52a = moment["tz"](_0x7ec7b5(0x245))[_0x7ec7b5(0x21d)](
                  _0x7ec7b5(0x213),
                ),
                _0x5d98ab = _0x1bb744["participants"][_0x7ec7b5(0x1cb)];
              Mariabody =
                _0x7ec7b5(0x1ed) +
                _0x43e71f[_0x7ec7b5(0x1b7)]("@")[0x0] +
                _0x7ec7b5(0x1c8) +
                _0x1bb744[_0x7ec7b5(0x21c)] +
                "\x0a\x20\x20\x20│✑\x20\x20𝗠𝗲𝗺𝗯𝗲𝗿\x20:\x20\x0a\x20\x20\x20│✑\x20" +
                Mariamembers +
                "th\x0a\x20\x20\x20│✑\x20\x20𝗝𝗼𝗶𝗻𝗲𝗱\x20:\x20\x0a\x20\x20\x20│✑\x20" +
                Mariatime +
                "\x20" +
                Mariadate +
                _0x7ec7b5(0x244);
              let _0x1b758a = generateWAMessageFromContent(
                _0x416340["id"],
                {
                  viewOnceMessage: {
                    message: {
                      messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 0x2,
                      },
                      interactiveMessage: proto[_0x7ec7b5(0x222)][
                        _0x7ec7b5(0x19e)
                      ]["create"]({
                        body: proto[_0x7ec7b5(0x222)][_0x7ec7b5(0x19e)][
                          _0x7ec7b5(0x194)
                        ]["create"]({ text: Mariabody }),
                        footer: proto[_0x7ec7b5(0x222)][_0x7ec7b5(0x19e)][
                          _0x7ec7b5(0x22e)
                        ][_0x7ec7b5(0x198)]({ text: botname }),
                        header: proto["Message"][_0x7ec7b5(0x19e)][
                          _0x7ec7b5(0x219)
                        ][_0x7ec7b5(0x198)]({
                          hasMediaAttachment: ![],
                          ...(await prepareWAMessageMedia(
                            { image: MariaWlcm },
                            { upload: _0x3441a2[_0x7ec7b5(0x238)] },
                          )),
                        }),
                        nativeFlowMessage: proto[_0x7ec7b5(0x222)][
                          "InteractiveMessage"
                        ]["NativeFlowMessage"]["create"]({
                          buttons: [
                            {
                              name: "quick_reply",
                              buttonParamsJson:
                                _0x7ec7b5(0x248) + prefix + _0x7ec7b5(0x1e2),
                            },
                            {
                              name: _0x7ec7b5(0x1c0),
                              buttonParamsJson:
                                "{\x22display_text\x22:\x22𝗚𝗥𝗢𝗨𝗣\x20𝗗𝗘𝗦𝗖\x22,\x22id\x22:\x22" +
                                prefix +
                                _0x7ec7b5(0x1bb),
                            },
                          ],
                        }),
                        contextInfo: {
                          mentionedJid: [_0x433cb7],
                          forwardingScore: 0x3e7,
                          isForwarded: !![],
                          forwardedNewsletterMessageInfo: {
                            newsletterJid: _0x7ec7b5(0x1f4),
                            newsletterName: ownername,
                            serverMessageId: 0x8f,
                          },
                        },
                      }),
                    },
                  },
                },
                {},
              );
              _0x3441a2["relayMessage"](
                _0x416340["id"],
                _0x1b758a[_0x7ec7b5(0x1fd)],
                {},
              );
            } else {
              if (_0x416340[_0x7ec7b5(0x241)] == "remove") {
                const _0x37b6ec = await getBuffer(ppuser),
                  _0x48a4f8 = moment["tz"](_0x7ec7b5(0x245))["format"](
                    _0x7ec7b5(0x21f),
                  ),
                  _0x18b0c2 = moment["tz"](_0x7ec7b5(0x245))[_0x7ec7b5(0x21d)](
                    _0x7ec7b5(0x213),
                  );
                let _0x1595db = _0x433cb7;
                const _0x398223 = _0x1bb744[_0x7ec7b5(0x1e8)][_0x7ec7b5(0x1cb)];
                Mariabody =
                  _0x7ec7b5(0x215) +
                  _0x1595db[_0x7ec7b5(0x1b7)]("@")[0x0] +
                  "\x20\x20」\x0a\x20\x20\x20│✑\x20\x20𝗟𝗲𝗳𝘁\x20\x0a\x20\x20\x20│✑\x20\x20" +
                  _0x1bb744[_0x7ec7b5(0x21c)] +
                  _0x7ec7b5(0x19d) +
                  _0x398223 +
                  "th\x0a\x20\x20\x20│✑\x20\x20𝗧𝗶𝗺𝗲\x20:\x20\x0a\x20\x20\x20│✑\x20" +
                  _0x48a4f8 +
                  "\x20" +
                  _0x18b0c2 +
                  _0x7ec7b5(0x244);
                let _0x29a9a4 = generateWAMessageFromContent(
                  _0x416340["id"],
                  {
                    viewOnceMessage: {
                      message: {
                        messageContextInfo: {
                          deviceListMetadata: {},
                          deviceListMetadataVersion: 0x2,
                        },
                        interactiveMessage: proto[_0x7ec7b5(0x222)][
                          _0x7ec7b5(0x19e)
                        ]["create"]({
                          body: proto[_0x7ec7b5(0x222)][_0x7ec7b5(0x19e)][
                            _0x7ec7b5(0x194)
                          ][_0x7ec7b5(0x198)]({ text: Mariabody }),
                          footer: proto[_0x7ec7b5(0x222)][_0x7ec7b5(0x19e)][
                            _0x7ec7b5(0x22e)
                          ][_0x7ec7b5(0x198)]({ text: botname }),
                          header: proto[_0x7ec7b5(0x222)][_0x7ec7b5(0x19e)][
                            _0x7ec7b5(0x219)
                          ][_0x7ec7b5(0x198)]({
                            hasMediaAttachment: ![],
                            ...(await prepareWAMessageMedia(
                              { image: MariaLft },
                              { upload: _0x3441a2["waUploadToServer"] },
                            )),
                          }),
                          nativeFlowMessage: proto["Message"][_0x7ec7b5(0x19e)][
                            _0x7ec7b5(0x230)
                          ][_0x7ec7b5(0x198)]({
                            buttons: [
                              {
                                name: _0x7ec7b5(0x1c0),
                                buttonParamsJson:
                                  "{\x22display_text\x22:\x22𝗦𝗖𝗥𝗜𝗣𝗧\x22,\x22id\x22:\x22" +
                                  prefix +
                                  _0x7ec7b5(0x1e2),
                              },
                              {
                                name: _0x7ec7b5(0x1c0),
                                buttonParamsJson:
                                  _0x7ec7b5(0x217) + prefix + _0x7ec7b5(0x1fc),
                              },
                            ],
                          }),
                          contextInfo: {
                            mentionedJid: [_0x433cb7],
                            forwardingScore: 0x3e7,
                            isForwarded: !![],
                            forwardedNewsletterMessageInfo: {
                              newsletterJid: _0x7ec7b5(0x1f2),
                              newsletterName: ownername,
                              serverMessageId: 0x8f,
                            },
                          },
                        }),
                      },
                    },
                  },
                  {},
                );
                _0x3441a2["relayMessage"](
                  _0x416340["id"],
                  _0x29a9a4[_0x7ec7b5(0x1fd)],
                  {},
                );
              }
            }
          }
        } catch (_0x4040c8) {
          console[_0x7ec7b5(0x22c)](_0x4040c8);
        }
      }
    }),
    (_0x3441a2[_0x2ec343(0x1ba)] = async (_0x224338) => {
      const _0x248f02 = _0x2ec343;
      let _0x8667b = (_0x224338["msg"] || _0x224338)[_0x248f02(0x1f7)] || "",
        _0x1780b0 = _0x224338["mtype"]
          ? _0x224338[_0x248f02(0x19f)]["replace"](/Message/gi, "")
          : _0x8667b[_0x248f02(0x1b7)]("/")[0x0];
      const _0x315b23 = await downloadContentFromMessage(_0x224338, _0x1780b0);
      let _0x550ba8 = Buffer[_0x248f02(0x204)]([]);
      for await (const _0x51de28 of _0x315b23) {
        _0x550ba8 = Buffer["concat"]([_0x550ba8, _0x51de28]);
      }
      return _0x550ba8;
    });
}
function _0x168f() {
  const _0x3a8481 = [
    "https://telegra.ph/file/5236c4d25117ec5a7a9ad.jpg",
    "fromMe",
    "messages.upsert",
    "2383578UjVZay",
    "isBuffer",
    "black",
    "notify",
    "WebMessageInfo",
    "sendImageAsSticker",
    "gray",
    "groupMetadata",
    "join",
    "Connection\x20Closed",
    "profilePictureUrl",
    "add",
    "3423245EPfHVN",
    "./lib/database/owner.json",
    "authState",
    "\x0aFN:",
    "parse",
    "bgBlack",
    "1137007bkWsTI",
    "sendText",
    "split",
    "rate-overlimit",
    "keys",
    "downloadMediaMessage",
    "description\x22}",
    "endsWith",
    "silent",
    "ephemeralMessage",
    "sendContact",
    "quick_reply",
    "close",
    "getNumber",
    "creds",
    "axios",
    "emit",
    "cache",
    "name",
    "\x20\x20」\x0a\x20\x20\x20│✑\x20\x20𝗪𝗲𝗹𝗰𝗼𝗺𝗲\x20𝘁𝗼\x20\x0a\x20\x20\x20│✑\x20\x20",
    "fromObject",
    "🤖Your\x20Pairing\x20Code🤖:\x20",
    "length",
    "contacts.update",
    "path",
    "\x0a\x0a🚀\x1aInitializing...",
    "2GAcXrX",
    "map",
    "uncaughtException",
    "decodeJid",
    "base64",
    "sendVideoAsSticker",
    "registered",
    "./session",
    "sendPoll",
    "readline",
    "public",
    "withoutContact",
    "Anna-Md\x20Here!",
    "error",
    "pushName",
    "statusCode",
    "isGroup",
    "https://telegra.ph/file/84c72f254095f1cb7748f.jpg",
    "1637752Nsmztw",
    "sc\x22}",
    "loadMessage",
    "32065569WFsttA",
    "chat",
    "red",
    "./lib/lib/myfunc.js",
    "participants",
    "existsSync",
    "purple",
    "redBright",
    "server",
    "│「\x20𝗛𝗶\x20👋\x20」\x0a└┬❖\x20「\x20\x20@",
    "startsWith",
    "./lib/lib/exif",
    "keyword",
    "https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60",
    "120363213314829067@newsletter",
    "item-not-found",
    "",
    "Update\x20",
    "11050977wKcern",
    "mimetype",
    "Anna-Md\x20ᴄᴏɴɴᴇᴄᴛᴇᴅ\x20\x1a\x1a\x0a\x0aᴘʀᴇꜰɪx:\x20[\x20",
    "WhatsApp",
    "242067712688",
    "watchFile",
    "menu\x22}",
    "message",
    "group-participants.update",
    "child",
    "some",
    "key",
    "messages",
    "participant",
    "from",
    "pino",
    "resolve",
    "green",
    "yellow",
    "includes",
    "author",
    "test",
    "store",
    "Chrome",
    "1580772payVtj",
    "output",
    "Socket\x20connection\x20timeout",
    "Your\x20WhatsApp\x20bot\x20number\x20please\x0aFor\x20example:\x20+919931122319:\x20",
    "Your\x20WhatsApp\x20bot\x20number\x0aFor\x20example:\x20+919931122319\x20:\x20",
    "DD/MM/YYYY",
    "chalk",
    "┌─❖\x0a│「\x20𝗚𝗼𝗼𝗱𝗯𝘆𝗲\x20👋\x20」\x0a└┬❖\x20「\x20\x20@",
    "appenTextMessage",
    "{\x22display_text\x22:\x22𝗠𝗘𝗡𝗨\x22,\x22id\x22:\x22",
    "append",
    "Header",
    "type",
    "Caught\x20exception:\x20",
    "subject",
    "format",
    "user",
    "HH:mm:ss",
    "getName",
    "blue",
    "Message",
    "\x0aitem1.X-ABLabel:owner\x20number\x0aitem2.EMAIL;type=INTERNET:togeoff2@gmail.com\x0aitem2.X-ABLabel:Email\x0aitem3.URL:https://instagram.com/lawliet.kfx\x0aitem3.X-ABLabel:Instagram\x0aitem4.ADR:;;Africa,\x20Gabon,\x20Libreville;;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD",
    "3oxlNVL",
    "@hapi/boom",
    "remoteJid",
    "Timed\x20Out",
    "serializeM",
    "prefa",
    "default",
    "@g.us",
    "log",
    "readFileSync",
    "Footer",
    "ᴀʟɪᴠᴇ\x20ᴛᴏ\x20ᴜꜱᴇ\x20ᴛʜᴇ\x20ʙᴏᴛ_\x20🤖",
    "NativeFlowMessage",
    "connection.update",
    "moment-timezone",
    "matchAll",
    "fakeObj",
    "white",
    "welcome",
    "\x0a\x0a\x1a\x1awaiting\x20for\x20messages",
    "waUploadToServer",
    "--pairing-code",
    "replace",
    "packname",
    "argv",
    "node-cache",
    "messages.update",
    "unwatchFile",
    "concat",
    "action",
    "ubuntu",
    "cyan",
    "\x0a\x20\x20\x20└───────────────┈\x20⳹",
    "Asia/Kolkata",
    "greenBright",
    "\x0a\x0a🥵\x1a\x1a\x1aConnected",
    "{\x22display_text\x22:\x22𝗦𝗖𝗥𝗜𝗣𝗧\x22,\x22id\x22:\x22",
    "BEGIN:VCARD\x0aVERSION:3.0\x0aN:",
    "quoted",
    "push",
    "contacts",
    "@s.whatsapp.net",
    "msg",
    "sender",
    "stdin",
    "exit",
    "@whiskeysockets/baileys",
    "bind",
    "verifiedName",
    "\x20]\x0a\x0aᴄᴏᴍᴍᴀɴᴅꜱ:\x20248\x0a\x0aᴠᴇʀꜱɪᴏɴ:\x203.0\x0a\x0aᴄʀᴇᴀᴛᴏʀ:\x20ᴛᴏɢᴇ\x20ɪɴᴜᴍᴀᴋɪ\x0a\x0a_ᴛʏᴘᴇ\x20",
    "Body",
    "Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20api",
    "sendMessage",
    "awesome-phonenumber",
    "create",
    "alloc",
    "./Config",
    "voters",
    "--mobile",
    "\x0a\x20\x20\x20│✑\x20\x20𝗠𝗲𝗺𝗯𝗲𝗿\x20:\x20\x0a\x20\x20\x20│✑\x20",
    "InteractiveMessage",
    "mtype",
  ];
  _0x168f = function () {
    return _0x3a8481;
  };
  return _0x168f();
}
return startMaria();
function _0x1c61(_0x158893, _0x19bac2) {
  const _0x168f48 = _0x168f();
  return (
    (_0x1c61 = function (_0x1c61c6, _0x3b7413) {
      _0x1c61c6 = _0x1c61c6 - 0x193;
      let _0x730e32 = _0x168f48[_0x1c61c6];
      return _0x730e32;
    }),
    _0x1c61(_0x158893, _0x19bac2)
  );
}
let file = require[_0x23129f(0x206)](__filename);
fs[_0x23129f(0x1fb)](file, () => {
  const _0x5ae8f8 = _0x23129f;
  fs[_0x5ae8f8(0x23f)](file),
    console["log"](chalk[_0x5ae8f8(0x1eb)](_0x5ae8f8(0x1f5) + __filename)),
    delete require[_0x5ae8f8(0x1c6)][file],
    require(file);
}),
  process["on"](_0x23129f(0x1d1), function (_0x115f24) {
    const _0x1718d7 = _0x23129f;
    let _0x8bc005 = String(_0x115f24);
    if (_0x8bc005[_0x1718d7(0x209)](_0x1718d7(0x210))) return;
    if (_0x8bc005["includes"](_0x1718d7(0x1f3))) return;
    if (_0x8bc005["includes"](_0x1718d7(0x1b8))) return;
    if (_0x8bc005[_0x1718d7(0x209)](_0x1718d7(0x1ac))) return;
    if (_0x8bc005["includes"](_0x1718d7(0x227))) return;
    if (_0x8bc005[_0x1718d7(0x209)]("Value\x20not\x20found")) return;
    console[_0x1718d7(0x22c)](_0x1718d7(0x21b), _0x115f24);
  });
