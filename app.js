const visits = [
  {
    id: "DEMO-1042",
    time: "09:40",
    name: "高橋 正雄",
    kana: "たかはし まさお",
    age: 78,
    sex: "男性",
    place: "架空市緑町 2-14",
    home: "一戸建て・妻と同居",
    purpose: "慢性心不全の服薬確認",
    meds: "フロセミド錠、ビソプロロール錠（架空の処方）",
    status: "memo",
    statusLabel: "音声メモあり",
    seed: "本人：今朝から靴がきつく、すねが張る。朝の薬は飲んだと思うが自信がない。妻：火曜の朝のマスが薬カレンダーに残っている。昨日の夕食は半分。夜間の排尿は2回。ふらつきや息苦しさは「いつもの程度」。家の体重計で62.4kg。前回の訪問時は61.1kg。血圧148/86、脈78で乱れはなし。",
    points: [
      "火曜朝のフロセミドが残っていた",
      "両下腿に圧痕性のむくみ",
      "前回より体重が1.3kg増加",
      "息苦しさの明らかな増悪はなし"
    ],
    soap: {
      s: "靴がきつく、すねが張ると本人が話した。朝の内服に自信がなく、妻が薬カレンダーを確認したところ火曜朝の1回分が残っていた。食事は昨日の夕食が半分。夜間排尿は2回。ふらつきと息苦しさは、本人の言葉では「いつもの程度」。",
      o: "自宅の体重計 62.4kg（前回訪問 61.1kg、+1.3kg）。血圧 148/86 mmHg、脈拍 78/分・整。両下腿に圧痕を認める、という訪問時の所見メモ。呼吸苦の増悪をうかがわせる訴えはなかった。",
      a: "利尿薬の1回飲み忘れと、体重増加・下腿のむくみが同時にある。息苦しさは増えていないため、本日の範囲では急な増悪より服薬の抜けと水分・塩分の確認を優先する下書き。判断は薬剤師が確認すること。",
      p: "残薬の理由を本人と妻に確認し、カレンダーの朝のマスを一緒に見る。次回訪問まで毎日同時刻に体重を記録してもらう。息苦しさや体重の急な増加があれば、処方元へ連絡する目安を紙で渡す。本下書きは院内RPAへ渡し、薬歴本文は薬剤師が確定する。"
    }
  },
  {
    id: "DEMO-1088",
    time: "11:10",
    name: "山田 節子",
    kana: "やまだ せつこ",
    age: 84,
    sex: "女性",
    place: "架空市青葉台 4-8 コーポ青葉201",
    home: "娘が夕方から同居",
    purpose: "インスリン手技と低血糖の確認",
    meds: "インスリン（持効型）・メトホルミン（架空の処方）",
    status: "visit",
    statusLabel: "訪問直後",
    seed: "本人：今朝、注射のあと少し手がふるえた。飴をなめておさまった。食事は朝にパン半分、昼はこれから。娘：単位数は変えていない。針の捨て方を再度見てほしい。空腹時の記録は手帳に138、126、141と直近3回。注射部位の右腹部に小さな青あざ。痛みの訴えはなし。",
    points: [
      "注射後のふるえは飴でおさまった",
      "単位数の自己変更はなし",
      "直近の空腹時血糖は手帳に記載",
      "右腹部に小さな皮下出血"
    ],
    soap: {
      s: "今朝、注射のあと少し手がふるえ、飴をなめておさまったと本人が話した。食事は朝がパン半分で、昼はこれから。娘によると単位数は変えていない。針の捨て方を見直してほしいとの依頼があった。",
      o: "手帳の空腹時血糖は直近3回が138、126、141。注射部位の右腹部に小さな青あざがあり、痛みの訴えはなし。単位目盛りの読み上げは、訪問時に本人が処方箋と同じ数字を指差して確認できた、というメモ。",
      a: "注射後のふるえは一度あり、糖分で軽快している。単位の自己変更は聞いていない。あざは痛みがなく、部位のローテーションを次の確認点にする。低血糖の再発がないかは、娘の帰宅後の記録で追う。",
      p: "低血糖時の飴の場所を、冷蔵庫の前に固定する。同じ部位へ続けて打たない順番を1枚の図にして渡す。針の廃棄は市の決められた箱へ戻す手順を娘と共有する。数値の判断と用量の変更はこの下書きでは行わない。"
    }
  },
  {
    id: "DEMO-1103",
    time: "14:20",
    name: "鈴木 健",
    kana: "すずき けん",
    age: 71,
    sex: "男性",
    place: "架空市緑町 8-3",
    home: "独居・隣人が鍵を預かる",
    purpose: "吸入薬の手技確認",
    meds: "吸入ステロイド配合剤（架空の処方）",
    status: "wait",
    statusLabel: "訪問前",
    seed: "",
    points: [
      "空噴霧の有無を本人に確認する",
      "うがいの実施を見る",
      "残量カウンターを記録する"
    ],
    soap: { s: "", o: "", a: "", p: "" }
  }
];

const state = {
  current: "DEMO-1042",
  screen: "desk",
  drafts: {},
  queue: [],
  logs: [
    { at: "08:12", who: "端末", what: "訪薬台を起動。外部送信はオフのまま。", out: "なし" }
  ]
};

const $ = (sel) => document.querySelector(sel);
const visitById = (id) => visits.find((v) => v.id === id);

function pad(n) { return String(n).padStart(2, "0"); }
function nowLabel() {
  const d = new Date();
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function boot() {
  const bar = $("#boot-bar");
  const items = [...document.querySelectorAll(".boot-steps li")];
  const captions = [
    "院内の台帳を開いています",
    "音声の下処理を端末内に用意",
    "下書き用のモデルを待機",
    "本日の訪問3件を読み込みました"
  ];
  let step = 0;
  const timer = setInterval(() => {
    step += 1;
    bar.style.width = `${step * 25}%`;
    if (items[step - 1]) items[step - 1].classList.add("is-on");
    $("#boot-caption").textContent = captions[Math.min(step, captions.length) - 1] || captions.at(-1);
    if (step >= 4) {
      clearInterval(timer);
      setTimeout(() => $("#boot").classList.add("is-done"), 420);
    }
  }, 520);
}

function renderList() {
  const html = visits.map((v) => {
    const chip = v.status === "wait" ? "wait" : v.status === "sent" ? "done" : "";
    return `<button class="visit ${v.id === state.current ? "is-active" : ""}" data-id="${v.id}">
      <div class="visit-time">${v.time}</div>
      <div class="visit-name"><strong>${v.name}</strong><em>${v.age}歳</em></div>
      <p>${v.purpose}</p>
      <span class="chip ${chip}">${v.statusLabel}</span>
    </button>`;
  }).join("");
  $("#visit-list").innerHTML = html;
}

function renderDesk() {
  const v = visitById(state.current);
  const draft = state.drafts[v.id] || { memo: v.seed, points: v.points.map(() => true), soap: { ...v.soap }, made: Boolean(v.soap.s) };
  state.drafts[v.id] = draft;

  $("#patient-kicker").textContent = `${v.id}　${v.time} 訪問`;
  $("#patient-name").textContent = v.name;
  $("#patient-facts").innerHTML = `
    <li><b>${v.kana}</b></li>
    <li>${v.age}歳・${v.sex}</li>
    <li>${v.place}</li>
    <li>${v.home}</li>
    <li>目的 <b>${v.purpose}</b></li>
    <li>${v.meds}</li>`;
  $("#memo").value = draft.memo;
  $("#points").innerHTML = v.points.map((p, i) =>
    `<label><input type="checkbox" data-point="${i}" ${draft.points[i] ? "checked" : ""}/>${p}</label>`
  ).join("");
  ["s", "o", "a", "p"].forEach((k) => { $(`#soap-${k}`).value = draft.soap[k] || ""; });
  updateCount();
  $("#make-btn").disabled = !draft.memo.trim() && !draft.points.some(Boolean);
  const waiting = v.status === "wait" && !draft.memo.trim();
  $("#empty-visit").hidden = !waiting;
}

function updateCount() {
  const text = ["s", "o", "a", "p"].map((k) => $(`#soap-${k}`).value).join("");
  $("#count").textContent = `下書き ${text.replace(/\s/g, "").length}字`;
}

function addLog(what) {
  state.logs.unshift({ at: nowLabel(), who: "佐藤 恵", what, out: "なし" });
}

function selectedPoints(v) {
  const draft = state.drafts[v.id];
  return v.points.filter((_, i) => draft.points[i]);
}

function compose(v) {
  const draft = state.drafts[v.id];
  const memo = draft.memo.trim();
  const picked = selectedPoints(v);
  const same = memo === v.seed && picked.length === v.points.length && v.soap.s;
  if (same) return { ...v.soap };
  const pointLine = picked.length ? picked.map((p) => `・${p}`).join("\n") : "・要点のチェックはなし。本文は音声メモに沿う。";
  return {
    s: memo ? `訪問時の聞き取りを、発言の順に近い形で残す。\n${memo}` : "音声メモはなく、チェックした要点だけを主観の欄の材料にした。",
    o: "音声メモに数値があればそのまま転記する。単位や測定条件が書かれていないものは、薬歴確定の前に薬剤師が補う。\n" + (memo.match(/\d/) ? memo.split("。").filter((s) => /\d/.test(s)).slice(0, 3).join("。") + "。" : "このメモには数値の記載が少ない。"),
    a: `本日の確認点は次のとおり。診断や用量の変更は書かない。\n${pointLine}`,
    p: "残った確認は次回訪問の先頭に置く。家族が管理に関わっている場合は、同じ紙を1枚渡す。この文章は下書きであり、薬歴としての確定は薬剤師が行う。院内のRPAへ渡したあとも、送信先は院内の受け渡しフォルダに限る。"
  };
}

function typeInto(fields) {
  const keys = ["s", "o", "a", "p"];
  keys.forEach((k) => { $(`#soap-${k}`).value = ""; });
  let i = 0;
  const full = keys.map((k) => fields[k]);
  const timer = setInterval(() => {
    const k = keys[i];
    const target = full[i];
    const el = $(`#soap-${k}`);
    const next = Math.min(target.length, el.value.length + 18);
    el.value = target.slice(0, next);
    updateCount();
    if (el.value.length >= target.length) i += 1;
    if (i >= keys.length) clearInterval(timer);
  }, 16);
}

function showToast(text) {
  const t = $("#toast");
  t.textContent = text;
  t.classList.add("is-on");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => t.classList.remove("is-on"), 2400);
}

function renderQueue() {
  if (!state.queue.length) {
    $("#queue-body").innerHTML = `<tr><td colspan="4" class="empty">まだ受け渡し待ちはありません。下書きを作った訪問から渡せます。</td></tr>`;
    $("#payload").textContent = "受け渡しデータはここに出ます。";
    return;
  }
  $("#queue-body").innerHTML = state.queue.map((q) =>
    `<tr><td>${q.at}</td><td>${q.name}<br><span style="color:#6d675f">${q.id}</span></td><td>院内フォルダ /rpa/in</td><td>待機</td></tr>`
  ).join("");
  $("#payload").textContent = JSON.stringify(state.queue[0].body, null, 2);
}

function renderLogs() {
  $("#log-body").innerHTML = state.logs.map((l) =>
    `<tr><td>${l.at}</td><td>${l.who}</td><td>${l.what}</td><td>${l.out}</td></tr>`
  ).join("");
}

function show(screen) {
  const page = screen === "soap" ? "desk" : screen;
  state.screen = page;
  $("#desk").hidden = page !== "desk";
  $("#queue-view").hidden = page !== "queue";
  $("#log-view").hidden = page !== "log";
  document.querySelectorAll(".step").forEach((b) => {
    const mark = page === "desk" ? screen === "soap" ? "soap" : "desk" : page;
    b.classList.toggle("is-here", b.dataset.screen === mark);
  });
  if (page === "queue") renderQueue();
  if (page === "log") renderLogs();
  if (screen === "soap") $("#soap-s").focus();
}

function bind() {
  $("#visit-list").addEventListener("click", (e) => {
    const btn = e.target.closest(".visit");
    if (!btn) return;
    state.current = btn.dataset.id;
    renderList();
    renderDesk();
    show("desk");
  });

  $("#memo").addEventListener("input", () => {
    state.drafts[state.current].memo = $("#memo").value;
    $("#make-btn").disabled = !$("#memo").value.trim() && !state.drafts[state.current].points.some(Boolean);
  });

  $("#points").addEventListener("change", (e) => {
    const box = e.target.closest("input");
    if (!box) return;
    state.drafts[state.current].points[Number(box.dataset.point)] = box.checked;
  });

  $("#use-seed").addEventListener("click", () => {
    const v = visitById(state.current);
    if (!v.seed) {
      showToast("この訪問はまだ音声がありません。戻ってから残せます。");
      return;
    }
    const wave = $("#wave");
    wave.classList.add("is-on");
    $("#use-seed").disabled = true;
    addLog(`${v.name}さんの音声メモを端末内で文字にした。`);
    setTimeout(() => {
      wave.classList.remove("is-on");
      $("#use-seed").disabled = false;
      state.drafts[v.id].memo = v.seed;
      $("#memo").value = v.seed;
      $("#make-btn").disabled = false;
      showToast("文字起こしが終わりました。内容を直してから下書きにします。");
    }, 1100);
  });

  $("#make-btn").addEventListener("click", () => {
    const v = visitById(state.current);
    const soap = compose(v);
    state.drafts[v.id].soap = soap;
    state.drafts[v.id].made = true;
    if (v.status === "wait" || v.status === "visit" || v.status === "memo") {
      v.status = "draft";
      v.statusLabel = "下書きあり";
    }
    typeInto(soap);
    addLog(`${v.name}さんのSOAP下書きを端末内で作成。`);
    renderList();
    showToast("下書きを入れました。気になる文は直接直してください。");
  });

  ["s", "o", "a", "p"].forEach((k) => {
    $(`#soap-${k}`).addEventListener("input", () => {
      state.drafts[state.current].soap[k] = $(`#soap-${k}`).value;
      updateCount();
    });
  });

  $("#handoff-btn").addEventListener("click", () => {
    const v = visitById(state.current);
    const soap = state.drafts[v.id].soap;
    if (!soap.s && !soap.o && !soap.a && !soap.p) {
      showToast("先に下書きを作ってください。");
      return;
    }
    $("#modal-name").textContent = `${v.name}（${v.id}）`;
    $("#modal").classList.add("is-on");
  });

  $("#modal-cancel").addEventListener("click", () => $("#modal").classList.remove("is-on"));
  $("#modal-ok").addEventListener("click", () => {
    const v = visitById(state.current);
    const draft = state.drafts[v.id];
    const body = {
      schema: "houyakudai.rpa.v1",
      patient_code: v.id,
      patient_name: v.name,
      visit_date: "2026-10-08",
      visit_time: v.time,
      soap: draft.soap,
      external_transmission: false,
      destination: "file:///rpa/in"
    };
    state.queue.unshift({ at: nowLabel(), id: v.id, name: v.name, body });
    v.status = "sent";
    v.statusLabel = "受け渡し待ち";
    addLog(`${v.name}さんの下書きを院内RPAの受け渡しに置いた。`);
    $("#modal").classList.remove("is-on");
    renderList();
    show("queue");
    showToast("院内の受け渡しに入れました。外には出ていません。");
  });

  document.querySelectorAll(".step").forEach((b) => {
    b.addEventListener("click", () => show(b.dataset.screen));
  });

  $("#brand").addEventListener("click", () => {
    $("#boot").classList.remove("is-done");
    $("#boot-bar").style.width = "0";
    document.querySelectorAll(".boot-steps li").forEach((li) => li.classList.remove("is-on"));
    boot();
  });

  $("#copy-payload").addEventListener("click", async () => {
    if (!state.queue.length) return;
    await navigator.clipboard.writeText(JSON.stringify(state.queue[0].body, null, 2));
    showToast("受け渡し用のJSONをコピーしました。");
  });
}

document.getElementById("today").textContent = "2026年10月8日（木）";
renderList();
renderDesk();
show("desk");
bind();
boot();
