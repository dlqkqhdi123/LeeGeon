import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
  flex-direction: column;
  background-color: #f8ebd8;
  margin: 0 auto;
`;

const TermsArea = styled.div``;

const CheckWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const TermsOrService = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 0;
`;

const BtnArea = styled.div`
  display: flex;
  margin: 32px;
  gap: 16px;
`;

const Btn = styled.button`
  width: 150px;
  background-color: #000;

  border: none;
  padding: 8px 16px;
  & > a {
    color: #fff;
    text-decoration: none;
  }
`;

const OkBtn = styled(Btn)`
  background-color: #ff9b50;
`;

function Terms() {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isCheckedService, setIsCheckedService] = useState(false);
  const [isCheckedOther, setIsCheckedOther] = useState(false);

  const handleServiceCheckboxChange = () => {
    setIsCheckedService(!isCheckedService);
    if (isCheckedOther) {
      setIsCheckedAll(!isCheckedService);
    }
  };

  const handleOtherCheckboxChange = () => {
    setIsCheckedOther(!isCheckedOther);
    if (isCheckedService) {
      setIsCheckedAll(!isCheckedOther);
    }
  };

  const handleAllCheckboxChange = () => {
    const newCheckedAllState = !isCheckedAll;
    setIsCheckedAll(newCheckedAllState);
    if (newCheckedAllState) {
      setIsCheckedService(true);
      setIsCheckedOther(true);
    } else {
      setIsCheckedService(false);
      setIsCheckedOther(false);
    }
  };

  const handleLinkClick = (e) => {
    if (!isCheckedService || !isCheckedOther) {
      e.preventDefault();
      if (!isCheckedService) {
        alert("이용약관에 동의해주세요.");
      }
      if (!isCheckedOther) {
        alert("개인정보 처리방침에 동의해주세요.");
      }
    }
  };

  return (
    <Container>
      <h2 style={{ fontSize: "42px" }}> Pet Owner Join </h2>
      <h3>정보입력</h3>
      <div className="headWrapper">
        <h3>
          <div className="sign-num now">1</div> -{" "}
          <div className="sign-num">2</div> - <div className="sign-num">3</div>
        </h3>
        <div className="headWrapper-sum">
          <div> 약관동의 </div>
          <div> 정보입력 </div>
          <div> 가입완료 </div>
        </div>
      </div>
      <TermsOrService>
        <TermsArea>
          <h2 style={{ textAlign: "left", fontSize: "16px" }}>이용약관</h2>
          <div>
            <textarea
              style={{
                width: "60vw",
                height: "300px",
                whiteSpace: "pre-wrap",
                wordBreak: "keep-all",
                resize: "none",
              }}
              readOnly
            >
              {
                "제1조(목적) \n \n 이 약관은 Hospetal 회사(전자상거래 사업자)가 운영하는 사이버 몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다. \n \n ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」\n\n제2조(정의)\n\n ① “몰”이란 Hospetal 회사가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.\n\n ② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다. \n\n ③ ‘회원’이라 함은 “몰”에 회원등록을 한 자로서, 계속적으로 “몰”이 제공하는 서비스를 이용할 수 있는 자를 말합니다.\n\n④ ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이 제공하는 서비스를 이용하는 자를 말합니다. \n\n제3조 (약관 등의 명시와 설명 및 개정) \n\n① “몰”은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호․모사전송번호․전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보관리책임자등을 이용자가 쉽게 알 수 있도록 00 사이버몰의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다. \n\n ② “몰은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회․배송책임․환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다. \n\n③ “몰”은 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. \n\n ④ “몰”이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 “몰” 은 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.\n\n⑤ “몰”이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간 내에 “몰”에 송신하여 “몰”의 동의를 받은 경우에는 개정약관 조항이 적용됩니다. \n\n  ⑥ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.\n\n 제4조(서비스의 제공 및 변경)\n\n① “몰”은 다음과 같은 업무를 수행합니다.\n1. 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결\n2. 구매계약이 체결된 재화 또는 용역의 배송\n3. 기타 “몰”이 정하는 업무\n\n② “몰”은 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화 또는 용역의 내용 및 제공일자를 명시하여 현재의 재화 또는 용역의 내용을 게시한 곳에 즉시 공지합니다. \n\n  ③ “몰”이 제공하기로 이용자와 계약을 체결한 서비스의 내용을 재화등의 품절 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를 이용자에게 통지 가능한 주소로 즉시 통지합니다.\n\n④ 전항의 경우 “몰”은 이로 인하여 이용자가 입은 손해를 배상합니다. 다만, “몰”이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다. \n\n제5조(서비스의 중단) \n\n ① “몰”은 컴퓨터 등 정보통신설비의 보수점검․교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.\n\n  ② “몰”은 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, “몰”이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다. \n\n③ 사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 “몰”은 제8조에 정한 방법으로 이용자에게 통지하고 당초 “몰”에서 제시한 조건에 따라 소비자에게 보상합니다. 다만, “몰”이 보상기준 등을 고지하지 아니한 경우에는 이용자들의 마일리지 또는 적립금 등을 “몰”에서 통용되는 통화가치에 상응하는 현물 또는 현금으로 이용자에게 지급합니다. \n\n 제6조(회원가입) \n\n  ① 이용자는 “몰”이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.\n\n ② “몰”은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.\n\n 1. 가입신청자가 이 약관 제7조제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조제3항에 의한 회원자격 상실 후 3년이 경과한 자로서 “몰”의 회원재가입 승낙을 얻은 경우에는 예외로 한다.\n\n 2. 등록 내용에 허위, 기재누락, 오기가 있는 경우 \n\n 3. 기타 회원으로 등록하는 것이 “몰”의 기술상 현저히 지장이 있다고 판단되는 경우\n\n ③ 회원가입계약의 성립 시기는 “몰”의 승낙이 회원에게 도달한 시점으로 합니다.\n\n ④ 회원은 회원가입 시 등록한 사항에 변경이 있는 경우, 상당한 기간 이내에 “몰”에 대하여 회원정보 수정 등의 방법으로 그 변경사항을 알려야 합니다.\n\n 제7조(회원 탈퇴 및 자격 상실 등) \n\n ① 회원은 “몰”에 언제든지 탈퇴를 요청할 수 있으며 “몰”은 즉시 회원탈퇴를 처리합니다.\n\n ② 회원이 다음 각 호의 사유에 해당하는 경우, “몰”은 회원자격을 제한 및 정지시킬 수 있습니다. \n\n 1. 가입 신청 시에 허위 내용을 등록한 경우 \n\n 2. “몰”을 이용하여 구입한 재화 등의 대금, 기타 “몰”이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우 \n\n 3. 다른 사람의 “몰” 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우\n\n 4. “몰”을 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우 ③ “몰”이 회원 자격을 제한․정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 “몰”은 회원자격을 상실시킬 수 있습니다.\n\n  ④ “몰”이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.\n\n 제8조(회원에 대한 통지) \n\n ① “몰”이 회원에 대한 통지를 하는 경우, 회원이 “몰”과 미리 약정하여 지정한 전자우편 주소로 할 수 있습니다.\n\n ② “몰”은 불특정다수 회원에 대한 통지의 경우 1주일이상 “몰” 게시판에 게시함으로서 개별 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별통지를 합니다. \n\n 제9조(재판권 및 준거법) \n\n ① “몰”과 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시의 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 이용자의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.\n\n ② “몰”과 이용자 간에 제기된 전자상거래 소송에는 한국법을 적용합니다.\n\n"
              }
            </textarea>
          </div>
          <CheckWrapper>
            <Label
              htmlFor="privacy"
              style={{ fontWeight: "400", fontSize: "12px" }}
            >
              <input
                type="checkbox"
                id="privacy"
                style={{ width: "30px", margin: "0" }}
                checked={isCheckedOther}
                onChange={handleOtherCheckboxChange}
              />
              이용약관에 동의합니다.
            </Label>
          </CheckWrapper>
        </TermsArea>
        <TermsArea>
          <h2 style={{ textAlign: "left", fontSize: "16px" }}>
            개인정보 처리방침
          </h2>
          <div>
            <textarea
              style={{
                width: "60vw",
                height: "300px",
                whiteSpace: "pre-wrap",
                wordBreak: "keep-all",
                resize: "none",
              }}
              readOnly
            >
              {
                "호스펫탈은 고객님들의 소중한 개인정보 보호를 위해 아래와 같은 방침을 수행하고 있습니다. \n \n 1. 개인정보의 처리 목적 < 호스펫탈 > ('호스펫탈')은 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다. 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인 식별.인증, 회원자격 유지.관리, 물품 또는 서비스 공급에 따른 금액 결제, 물품 또는 서비스의 공급.배송 등 \n \n2. 개인정보의 처리 및 보유 기간  \n \n① ‘호스펫탈’은 정보주체로부터 개인정보를 수집할 때 동의 받은 개인정보 보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다.  \n \n② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다. 고객 가입 및 관리 : 카카오싱크를 통한 회원가입 및 카카오채널을 통한 관리 보유 기간 : 카카오채널 탈퇴 시, 즉시 삭제  \n \n3. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다. ① 정보주체는 ‘호스펫탈’에 대해 언제든지 다음 각 호의 개인정보보호 관련 권리를 행사할 수 있습니다.  \n \n1. 개인정보 열람요구  \n2. 오류 등이 있을 경우 정정 요구  \n3. 삭제요구  \n4. 처리정지 요구 \n \n4. 처리하는 개인정보의 항목 작성\n \n① ‘호스펫탈’은 다음의 개인정보 항목을 처리하고 있습니다. ‘호스펫탈’에서 수집하는 개인정보 항목‘호스펫탈’ 회원 가입 및 고객 문의 시, 제공 동의를 해주시는 개인정보 수집 항목입니다. ■ 회원 가입 시(회원) 필수항목 : 이름, 이메일, 전화번호, 성별, 연령대 선택항목 : 생년월일 수집목적 : 호스펫탈 회원관리 및 마케팅 이용 보유기간 : 회원 탈퇴 또는 동의철회 시 지체없이 파기 ■ 고객 문의 시(비회원) 필수항목 : 문의종류, 이름, 휴대폰번호, 이메일, 문의사항 수집목적 : 고객문의 및 상담요청에 대한 회신, 상담을 위한 서비스 이용기록 조회 보유기간 : 문의 접수 후 2년 간 보관 (단, 관계 법령이 정한 시점까지 보존) <카카오 개인정보 제3자 제공 동의> 아래는 ‘호스펫탈’ 회원 가입 시(카카오 계정을 통한 간편 가입시) 제공 동의를 해주시는 자동 수집 항목입니다. 필수항목 : 프로필 정보(닉네임/프로필 사진), 카카오계정(이메일), 카카오계정(전화번호), 성별, 연령대, 카카오톡 채널 추가 상태 및 내역 선택항목 : 생일, 출생연도 수집목적 : 호스펫탈 카카오채널을 통한 회원관리 및 마케팅 이용 보유기간 : 카카오채널 탈퇴 또는 동의철회 시 지체없이 파기 \n\n② ‘호스펫탈’은 만 14세 미만 아동의 개인정보를 보호하기 위하여 회원가입은 만14세 이상만 가능하도록 함으로써 아동의 개인정보를 수집하지 않습니다.\n\n5. 개인정보의 파기 ‘호스펫탈’은 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다. \n\n 파기의 절차, 기한 및 방법은 다음과 같습니다.’ -파기절차 이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다. -파기기한 이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.\n\n 6. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항\n\n  ① ‘호스펫탈’은 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.\n\n② 쿠키는 웹사이트를 운영하는데 이용되는 서버(https)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다. \n\n 가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.\n\n 나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구 > 인터넷옵션 > 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.\n\n  다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.\n\n 7. 개인정보 보호책임자 작성\n\n ① ‘호스펫탈’은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.\n\n ② ‘호스펫탈’의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. ‘호스펫탈’은 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.\n\n 8. 개인정보 처리방침 변경\n\n  ① 이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.\n\n 9. 개인정보의 안전성 확보 조치 ‘호스펫탈’은 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.\n\n ① 개인정보 취급 직원의 최소화 및 교육 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.\n\n ② 해킹 등에 대비한 기술적 대책 ‘호스펫탈’은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다. \n\n ③ 개인정보의 암호화 이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.\n\n ④ 접속기록의 보관 및 위변조 방지 개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능 사용하고 있습니다.\n\n ⑤ 개인정보에 대한 접근 제한 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.\n\n 10. 정보주체의 권익침해에 대한 구제방법 아래의 기관은 호스펫탈 과는 별개의 기관으로서, ‘호스펫탈’의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다. \n\n ▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영) 소관업무 : 개인정보 침해사실 신고, 상담 신청 홈페이지 : privacy.kisa.or.kr 전화 : (국번없이) 118 주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층 개인정보침해신고센터\n\n ▶ 개인정보 분쟁조정위원회 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결) 홈페이지 : www.kopico.go.kr 전화 : (국번없이) 1833-6972 주소 : (03171)서울특별시 종로구 세종대로 209정부서울청사 4층\n\n ▶ 대검찰청 사이버범죄수사단 : 02-3480-3573 (www.spo.go.kr)\n\n ▶ 경찰청 사이버안전국 : 182 (http://cyberbureau.police.go.kr) \n"
              }
            </textarea>
          </div>
          <CheckWrapper>
            <Label
              htmlFor="service"
              style={{ fontWeight: "400", fontSize: "12px" }}
            >
              <input
                type="checkbox"
                id="service"
                style={{ width: "30px", margin: "0" }}
                checked={isCheckedService}
                onChange={handleServiceCheckboxChange}
              />
              개인정보 처리방침에 동의합니다.
            </Label>
          </CheckWrapper>
        </TermsArea>
        <Label
          style={{ fontWeight: "400", fontSize: "12px", marginTop: "8px" }}
        >
          <input
            type="checkbox"
            checked={isCheckedAll}
            onChange={handleAllCheckboxChange}
            style={{ width: "30px", margin: "0" }}
          />
          전체 동의 합니다.
        </Label>
      </TermsOrService>
      <BtnArea>
        <Btn>
          <Link to="/">취소</Link>
        </Btn>
        <OkBtn>
          <Link to="/SignUp" onClick={handleLinkClick}>
            다음 단계로
          </Link>
        </OkBtn>
      </BtnArea>
    </Container>
  );
}
export default Terms;
