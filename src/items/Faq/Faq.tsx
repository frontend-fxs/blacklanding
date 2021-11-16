import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {
  FaqAnswer,
  FaqBtnIcon,
  FaqFullAnswer,
  FaqQuestion,
  FaqSection,
  FaqTitle,
  FaqWrapper,
} from './styles';

const Faq = () => {
  const [showFullAnswer, setShowFullAnswer] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
  });

  return (
    <FaqSection className="fxs_bg_lightest_clr  fxs_txt_center">
      <FaqTitle className="fxs_headline_from_medium_to_large fxs_txt_dark_1_clr">
        Questions & Answers
      </FaqTitle>
      {/* 1 */}
      <FaqWrapper
        data-gtmid="landing-qa-subscription"
        onClick={() => setShowFullAnswer({ ...showFullAnswer, one: !showFullAnswer.one })}
      >
        <FaqQuestion className="fxs_txt_large fxs_txt_dark_1_clr fxs_txt_weight_400 fxs_txt_left">
          What does my Premium subscription is for?
        </FaqQuestion>
        <FaqBtnIcon
          showFullAnswer={showFullAnswer.one}
          onClick={() => setShowFullAnswer({ ...showFullAnswer, one: !showFullAnswer.one })}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </FaqBtnIcon>
        <FaqAnswer
          className="fxs_txt_left fxs_entryPlain_txt"
          short
          showFullAnswer={showFullAnswer.one}
        >
          Our Premium subscription has been thought for all the traders
          <FaqFullAnswer showFullAnswer={!showFullAnswer.one}>
            {!showFullAnswer.one && '...'}
          </FaqFullAnswer>
          <FaqFullAnswer showFullAnswer={showFullAnswer.one}>
            {' '}
            out there that are tired of trading alone and feel frustrated. Our experts are here to
            guide you on your <strong> complete trading process</strong>, giving you all the
            insights to <strong> react rapidly </strong>
            in the volatile markets and train you to be that
            <strong> professional trader that you want to become</strong>.
          </FaqFullAnswer>
        </FaqAnswer>
      </FaqWrapper>
      {/* 2 */}
      <FaqWrapper
        data-gtmid="landing-qa-improve-trading"
        onClick={() => setShowFullAnswer({ ...showFullAnswer, two: !showFullAnswer.two })}
      >
        <FaqQuestion className="fxs_txt_large fxs_txt_dark_1_clr fxs_txt_weight_400 fxs_txt_left">
          What does the Premium Trading Studio offer me to improve my trading?
        </FaqQuestion>
        <FaqBtnIcon
          showFullAnswer={showFullAnswer.two}
          onClick={() => setShowFullAnswer({ ...showFullAnswer, two: !showFullAnswer.two })}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </FaqBtnIcon>
        <FaqAnswer
          className="fxs_txt_left fxs_entryPlain_txt"
          longPreviewDesktop
          showFullAnswer={showFullAnswer.two}
        >
          Our Trading Studio is your<strong> personal dashboard </strong>
          where you can access<strong> all the market insights</strong>
          <FaqFullAnswer showFullAnswer={!showFullAnswer.two}>
            {!showFullAnswer.two && '...'}
          </FaqFullAnswer>
          <FaqFullAnswer showFullAnswer={showFullAnswer.two}>
            {', '}you need to<strong> achieve your trades</strong>. If you become Premium, here you
            will find all our real-time signals, strategies and day-by-day analysis by our mentors,
            more than 4000 videos and Live Webinars, and all the complete guidance you need from our
            experts.
          </FaqFullAnswer>
        </FaqAnswer>
      </FaqWrapper>
      {/* 3 */}
      <FaqWrapper
        data-gtmid="landing-qa-succesful-trader"
        onClick={() =>
          setShowFullAnswer({
            ...showFullAnswer,
            three: !showFullAnswer.three,
          })
        }
      >
        <FaqQuestion className="fxs_txt_large fxs_txt_dark_1_clr fxs_txt_weight_400 fxs_txt_left">
          Can I become a successful trader?
        </FaqQuestion>
        <FaqBtnIcon
          showFullAnswer={showFullAnswer.three}
          onClick={() =>
            setShowFullAnswer({
              ...showFullAnswer,
              three: !showFullAnswer.three,
            })
          }
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </FaqBtnIcon>
        <FaqAnswer
          className="fxs_txt_left fxs_entryPlain_txt"
          showFullAnswer={showFullAnswer.three}
        >
          <strong>Of course you can! </strong>We are here to help you achieve all your trading goals
          <FaqFullAnswer showFullAnswer={!showFullAnswer.three}>
            {!showFullAnswer.three && '...'}
          </FaqFullAnswer>
          <FaqFullAnswer showFullAnswer={showFullAnswer.three}>
            {'. '}Our mentors will be by your side from start to finish so you can develop yourself
            in the world of trading in an<strong> autonomous</strong>,<strong> profitable </strong>
            and<strong> emotionally</strong> comfortable way.
          </FaqFullAnswer>
        </FaqAnswer>
      </FaqWrapper>
      {/* 4 */}
      <FaqWrapper
        data-gtmid="landing-qa-experts"
        onClick={() => setShowFullAnswer({ ...showFullAnswer, four: !showFullAnswer.four })}
      >
        <FaqQuestion className="fxs_txt_large fxs_txt_dark_1_clr fxs_txt_weight_400 fxs_txt_left">
          What markets do your experts teach?
        </FaqQuestion>
        <FaqBtnIcon
          showFullAnswer={showFullAnswer.four}
          onClick={() => setShowFullAnswer({ ...showFullAnswer, four: !showFullAnswer.four })}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </FaqBtnIcon>
        <FaqAnswer
          className="fxs_txt_left fxs_entryPlain_txt"
          short
          showFullAnswer={showFullAnswer.four}
        >
          Our experts will provide you with real-time signals, daily trading ideas and analysis
          <FaqFullAnswer showFullAnswer={!showFullAnswer.four}>
            {!showFullAnswer.four && '...'}
          </FaqFullAnswer>
          <FaqFullAnswer showFullAnswer={showFullAnswer.four}>
            {', '}Live webinars and more then 4,000 videos in the following markets:{' '}
            <strong>Forex, Cryptos, Stocks, Indices </strong>
            and<strong> Commodities</strong>.
          </FaqFullAnswer>
        </FaqAnswer>
      </FaqWrapper>
      {/* 5 */}
      <FaqWrapper
        data-gtmid="landing-qa-experience"
        onClick={() => setShowFullAnswer({ ...showFullAnswer, five: !showFullAnswer.five })}
      >
        <FaqQuestion className="fxs_txt_large fxs_txt_dark_1_clr fxs_txt_weight_400 fxs_txt_left">
          I don’t have experience in trading, can I become professional with you?
        </FaqQuestion>
        <FaqBtnIcon
          showFullAnswer={showFullAnswer.five}
          onClick={() => setShowFullAnswer({ ...showFullAnswer, five: !showFullAnswer.five })}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </FaqBtnIcon>
        <FaqAnswer
          className="fxs_txt_left fxs_entryPlain_txt"
          longPreviewDesktop
          longest
          showFullAnswer={showFullAnswer.five}
        >
          Nobody starts at the top. With the correct{' '}
          <strong>guidance, education, discipline </strong>and{' '}
          <strong>emotional trading control</strong>
          <FaqFullAnswer showFullAnswer={!showFullAnswer.five}>
            {!showFullAnswer.five && '...'}
          </FaqFullAnswer>
          <FaqFullAnswer showFullAnswer={showFullAnswer.five}>
            {' '}
            you can reach the maximum of your trading potential. Our service is designed 100%
            focusing on these 4 basic principles. Remember, our experts have been one day beginners
            as you are today!
          </FaqFullAnswer>
        </FaqAnswer>
      </FaqWrapper>
      {/* 6 */}
      <FaqWrapper
        data-gtmid="landing-qa-emotional-control"
        onClick={() => setShowFullAnswer({ ...showFullAnswer, six: !showFullAnswer.six })}
      >
        <FaqQuestion className="fxs_txt_large fxs_txt_dark_1_clr fxs_txt_weight_400 fxs_txt_left">
          I don’t have emotional trading control. Could you help me?
        </FaqQuestion>
        <FaqBtnIcon
          showFullAnswer={showFullAnswer.six}
          onClick={() => setShowFullAnswer({ ...showFullAnswer, six: !showFullAnswer.six })}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </FaqBtnIcon>
        <FaqAnswer
          className="fxs_txt_left fxs_entryPlain_txt"
          short
          longPreviewDesktop
          showFullAnswer={showFullAnswer.six}
        >
          <strong>This is our mentors mission</strong>. They will teach you how to control your
          emotions while trading
          <FaqFullAnswer showFullAnswer={!showFullAnswer.six}>
            {!showFullAnswer.six && '...'}
          </FaqFullAnswer>
          <FaqFullAnswer showFullAnswer={showFullAnswer.six}>
            {' '}
            using <strong>different techniques and tools </strong>
            and always from a<strong> human point of view</strong>.
          </FaqFullAnswer>
        </FaqAnswer>
      </FaqWrapper>
      {/* 7 */}
      <FaqWrapper
        data-gtmid="landing-qa-profitable"
        onClick={() =>
          setShowFullAnswer({
            ...showFullAnswer,
            seven: !showFullAnswer.seven,
          })
        }
      >
        <FaqQuestion className="fxs_txt_large fxs_txt_dark_1_clr fxs_txt_weight_400 fxs_txt_left">
          I want to become profitable. How can you help me?
        </FaqQuestion>
        <FaqBtnIcon
          showFullAnswer={showFullAnswer.seven}
          onClick={() =>
            setShowFullAnswer({
              ...showFullAnswer,
              seven: !showFullAnswer.seven,
            })
          }
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </FaqBtnIcon>
        <FaqAnswer
          className="fxs_txt_left fxs_entryPlain_txt"
          short
          longPreviewDesktop
          showFullAnswer={showFullAnswer.seven}
        >
          We will guide you to improve your trading skills by helping you to define the best trading
          styles
          <FaqFullAnswer showFullAnswer={!showFullAnswer.seven}>
            {!showFullAnswer.seven && '...'}
          </FaqFullAnswer>
          <FaqFullAnswer showFullAnswer={showFullAnswer.seven}>
            {' '}
            that better suit you, with daily lessons about the markets and learning to{' '}
            <strong>detect the risks that can appear for each trade</strong>. This with the aim that
            you could
            <strong> develop your own trading plan </strong>and become profitable.
          </FaqFullAnswer>
        </FaqAnswer>
      </FaqWrapper>
      {/* 8 */}
      <FaqWrapper
        data-gtmid="landing-qa-change-subscription"
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          if ((event.target as any).href) return;
          setShowFullAnswer({
            ...showFullAnswer,
            eight: !showFullAnswer.eight,
          });
        }}
      >
        <FaqQuestion className="fxs_txt_large fxs_txt_dark_1_clr fxs_txt_weight_400 fxs_txt_left">
          How can I change my subscription?
        </FaqQuestion>
        <FaqBtnIcon
          showFullAnswer={showFullAnswer.eight}
          onClick={() =>
            setShowFullAnswer({
              ...showFullAnswer,
              eight: !showFullAnswer.eight,
            })
          }
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </FaqBtnIcon>
        <FaqAnswer
          className="fxs_txt_left fxs_entryPlain_txt"
          longest
          longPreviewDesktop
          showFullAnswer={showFullAnswer.eight}
        >
          If you want to change your subscription plan, please send us an email to{' '}
          <a href="mailto:contact@fxstreet.com" data-gtmid="landing-qa-change-subscription-email">
            contact@fxstreet.com
          </a>
          <FaqFullAnswer showFullAnswer={!showFullAnswer.eight}>
            {!showFullAnswer.eight && '...'}
          </FaqFullAnswer>
          <FaqFullAnswer showFullAnswer={showFullAnswer.eight}>
            {' '}
            indicating the change you want to apply for and we will take care of everything.
          </FaqFullAnswer>
        </FaqAnswer>
      </FaqWrapper>
      {/* 9 */}
      <FaqWrapper
        data-gtmid="landing-qa-unsubscribe-service"
        onClick={() =>
          setShowFullAnswer({
            ...showFullAnswer,
            nine: !showFullAnswer.nine,
          })
        }
      >
        <FaqQuestion className="fxs_txt_large fxs_txt_dark_1_clr fxs_txt_weight_400 fxs_txt_left">
          How can I unsubscribe from the Premium service?
        </FaqQuestion>
        <FaqBtnIcon
          showFullAnswer={showFullAnswer.nine}
          onClick={() =>
            setShowFullAnswer({
              ...showFullAnswer,
              nine: !showFullAnswer.nine,
            })
          }
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </FaqBtnIcon>
        <FaqAnswer
          className="fxs_txt_left fxs_entryPlain_txt"
          longest
          longPreviewDesktop
          showFullAnswer={showFullAnswer.nine}
        >
          You can unsubscribe from our Premium service whenever you want{' '}
          <strong>through your Stripe or Paypal account</strong>
          <FaqFullAnswer showFullAnswer={!showFullAnswer.nine}>
            {!showFullAnswer.nine && '...'}
          </FaqFullAnswer>
          <FaqFullAnswer showFullAnswer={showFullAnswer.nine}>
            {' '}
            by canceling the recurring payments. You can also unsubscribe{' '}
            <strong>through your FXStreet profile</strong> following these steps:
            <ul>
              <ol>
                1. Go to <strong>"My profile"</strong> clicking on your nickname (upper right corner
                of FXStreet homepage)
              </ol>
              <ol>
                2. Then click on <strong>"Manage your subscription"</strong>
              </ol>
              <ol>
                3. Select the option <strong>"Cancel your subscription"</strong> and accept
              </ol>
            </ul>
            <p>
              {' '}
              If you have purchased the Premium subscription using{' '}
              <strong>ApplePay or GooglePay</strong> you should cancel the subscription on the
              store.
            </p>
            <p>Remember that the subscriptions will be automatically renewed on a monthly basis.</p>
          </FaqFullAnswer>
        </FaqAnswer>
      </FaqWrapper>
    </FaqSection>
  );
};

export default Faq;
