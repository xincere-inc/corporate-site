import { useState, type FormEventHandler } from "react";

interface Props {}

export default function ContactForm({}: Props) {
  const submit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const inquiryType = form.get("inquiry-type") || "";
    setIsInquiryTypeNull(inquiryType === "");

    const name = form.get("username") || "";
    setIsNameNull(name === "");

    const awareness = form.get("awareness") || "";
    setIsAwareness(awareness === "");

    const content = form.get("content") || "";
    setIsContentNull(content === "");

    const email = form.get("email") || "";
    setIsEmailNull(email === "");

    const privacyPolicyCheck = form.get("privacy") || "";
    setIsEmailNull(privacyPolicyCheck === "");

    if (
      privacyPolicyCheck === "" ||
      inquiryType === "" ||
      name === "" ||
      awareness === "" ||
      content === "" ||
      email === ""
    ) {
      return;
    } else {
      const tel = form.get("tel") || "";
      const companyname = form.get("companyname") || "";

      const obj = {
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "******************新着問い合わせ**********************",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*${name}様${
                companyname !== "" ? `(${companyname})` : ""
              }からお問い合わせがありました*`,
            },
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*Email:*\n${email}`,
              },
              {
                type: `mrkdwn`,
                text: `*電話番号*\n${tel === "" ? "未記入" : ""}`,
              },
              {
                type: `mrkdwn`,
                text: `*知ったきっかけ*\n${awareness}`,
              },
              {
                type: "mrkdwn",
                text: `*問い合わせ種別:*\n${inquiryType}`,
              },
            ],
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*お問い合わせ内容*\n${content}`,
            },
          },
        ],
      };
      fetch(
        "https://hooks.slack.com/services/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",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(obj),
        }
      ).then(() => (window.location.href = "/contact-success"));
    }
  };

  const [isInquiryTypeNull, setIsInquiryTypeNull] = useState<boolean>(false);
  const [isNameNull, setIsNameNull] = useState<boolean>(false);
  const [isEmailNull, setIsEmailNull] = useState<boolean>(false);
  const [isContentNull, setIsContentNull] = useState<boolean>(false);
  const [isAwareness, setIsAwareness] = useState<boolean>(false);

  return (
    <section className="md:mx-0 mx-5">
      <form onSubmit={submit}>
        <div className="shadow-md p-6 mb-5">
          <div className="m-0 p-0">
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <label htmlFor="inquiry-type" className="font-medium mr-2">
                  お問い合わせ種別
                </label>
                <p className="font-normal text-xs text-alert">必須</p>
              </div>
              <div>
                <div className="mt-2">
                  <select
                    id="inquiry-type"
                    name="inquiry-type"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="" selected={true}>
                      ご選択ください
                    </option>
                    <option value="デジタルパートナー事業について">
                      デジタルパートナー事業について
                    </option>
                    <option value="エンジニアチーム構築支援事業について">
                      エンジニアチーム構築支援事業について
                    </option>
                    <option value="弊社採用について">弊社採用について</option>
                    <option value="その他お問い合わせ">
                      その他お問い合わせ
                    </option>
                  </select>
                </div>
              </div>
              {isInquiryTypeNull ? (
                <p className="text-alert text-xs mt-1">
                  ※ お問い合わせ種別を選択ください
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <label htmlFor="username" className="font-medium mr-2">
                お名前
              </label>
              <p className="font-normal text-xs text-alert">必須</p>
            </div>
            <div>
              <input
                id="username"
                name="username"
                placeholder="お名前をご記入ください"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
            {isNameNull ? (
              <p className="text-alert text-xs mt-1">
                ※ お名前をご記入ください
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <label htmlFor="email" className="font-medium mr-2">
                メールアドレス
              </label>
              <p className="font-normal text-xs text-alert">必須</p>
            </div>
            <div>
              <input
                id="email"
                name="email"
                placeholder="example@xincere.jp"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
            {isEmailNull ? (
              <p className="text-alert text-xs mt-1">
                ※ メールアドレスをご記入ください
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <label htmlFor="tel" className="font-medium mr-2">
                電話番号
              </label>
              <p className="font-normal text-xs text-description">任意</p>
            </div>
            <div>
              <input
                id="tel"
                name="tel"
                type="tel"
                autoComplete="tel"
                placeholder="09012345678"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <label htmlFor="companyname" className="font-medium mr-2">
                会社名
              </label>
              <p className="font-normal text-xs text-description">任意</p>
            </div>
            <div>
              <input
                id="companyname"
                name="companyname"
                placeholder="株式会社シンシア"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <label htmlFor="content" className="font-medium mr-2">
                お問い合わせ内容
              </label>
              <p className="font-normal text-xs text-alert">必須</p>
            </div>
            <div>
              <textarea
                id="content"
                name="content"
                placeholder="問い合わせ内容を記載ください"
                rows={5}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
            {isContentNull ? (
              <p className="text-alert text-xs mt-1">
                ※ お問い合わせ内容をご記入ください
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-8">
            <div className="font-gothic flex items-center mb-2">
              <p className="font-medium mr-2">
                シンシアをお知りになったきっかけを教えてください
              </p>
              <p className="font-normal text-xs text-alert">必須</p>
            </div>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-x-3">
                <input
                  id="fromGoogle"
                  name="awareness"
                  type="radio"
                  value="Google等検索エンジンから"
                  className="h-4 w-4 border-gray-300 focus:ring-primary text-primary"
                />
                <label
                  htmlFor="fromGoogle"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Google等検索エンジンから
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="fromFriend"
                  name="awareness"
                  type="radio"
                  value="知人の紹介"
                  className="h-4 w-4 border-gray-300 focus:ring-primary text-primary"
                />
                <label
                  htmlFor="fromFriend"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  知人の紹介
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="fromMedia"
                  name="awareness"
                  type="radio"
                  value="弊社メディアから"
                  className="h-4 w-4 border-gray-300 focus:ring-primary text-primary"
                />
                <label
                  htmlFor="fromMedia"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  弊社メディアから
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="others"
                  name="awareness"
                  type="radio"
                  value="その他"
                  className="h-4 w-4 border-gray-300 focus:ring-primary text-primary"
                />
                <label
                  htmlFor="others"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  その他
                </label>
              </div>
            </div>
            {isAwareness ? (
              <p className="text-alert text-xs mt-1">※ ご選択ください</p>
            ) : (
              <></>
            )}
          </div>
          <div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  value="OK"
                  required
                  className="h-4 w-4 rounded border-gray-300 focus:ring-primary text-primary"
                />
              </div>
              <div className="text-sm leading-6">
                <p className="text-gray-600">
                  <a href="/" className="underline text-primary">
                    個人情報の取扱い
                  </a>
                  に同意した上で送信してください。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mx-0 md:mt-10 mx-5 mt-6">
          <div className="md:flex md:items-center md:justify-around text-center">
            <input
              id="submit-form"
              type="submit"
              className="w-[256px] md:w-[256px] w-full text-xl font-bold text-white bg-primary rounded-sm py-3 px-5 border-2 border-primary cursor-pointer"
              value="同意して送信する"
            />
          </div>
        </div>
      </form>
    </section>
  );
}
