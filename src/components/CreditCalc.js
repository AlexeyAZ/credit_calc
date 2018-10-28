import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Slider from 'rc-slider';

import declension from '../utils/declension';
import formatCurrency from '../utils/formatCurrency';

import Row from './ui/Row';
import Column from './ui/Column';
import Card from './ui/Card';
import Divider from './ui/Divider';
import Heading from './ui/Heading';
import Text from './ui/Text';

const CreditCardSliderStyled = styled(Slider)`
  &.rc-slider {
    margin-bottom: 0.8rem;
  }
  &.rc-slider-with-marks {
    margin-bottom: 1.6rem;
  }
  .rc-slider-rail {
    background-color: ${props => props.theme.colors.gray.main};
  }
  .rc-slider-track {
    background-color: ${props => props.theme.colors.purple.main};
  }
  .rc-slider-dot {
    display: none;
  }
  .rc-slider-handle {
    border-color: ${props => props.theme.colors.blue.main};
    margin-left: -${20 / 2}px;
    margin-top: -${20 / 2 - 2}px;
    height: 20px;
    width: 20px;
    &:active,
    &:hover,
    &:focus {
      border-color: ${props => props.theme.colors.blue.main};
    }
    &:focus {
      box-shadow: none;
    }
  }
  .rc-slider-mark {
    font-size: ${props => props.theme.fontSizes[1]}px;
  }
  .rc-slider-mark-text,
  .rc-slider-mark-text-active {
    color: ${props => props.theme.colors.gray.dark};
  }
`;
const CreditCardSlider = ({val, removeMarks, onChange, ...rest}) => {
  return (
    <CreditCardSliderStyled
      {...rest}
      min={val.min}
      max={val.max}
      defaultValue={val.defaultValue}
      marks={removeMarks ? {} : {
        [val.min]: {
          style: {width: '50%', marginLeft: 0, textAlign: 'left'},
          label: `${formatCurrency(val.min)}${val.minDescription}`
        },
        [val.max]: {
          style: {width: '50%', marginLeft: 0, textAlign: 'right', left: 'auto', right: 0},
          label: `${formatCurrency(val.max)}${val.maxDescription}`
        }
      }}
      onChange={onChange}
    />
  )
}
CreditCardSlider.propTypes = {
  val: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    defaultValue: PropTypes.number,
  }),
  onChange: PropTypes.func,
};

const CreditCardColumn = styled(Column).attrs({
  width: props => props.range ? [1, null, 2/3] : [1, null, 1/3]
})``;

class CreditCalc extends React.Component {
  static propTypes = {
    amount: PropTypes.object,
    period: PropTypes.object,
    desiredYield: PropTypes.object,
    theme: PropTypes.object,
  };

  state = {
    amount: {
      value: null,
    },
    period: {
      value: null,
    },
    desiredYield: {
      value: null,
    },
    expectedYield: {
      value: null,
    },
    risk: {
      min: 0,
      max: 100,
    }
  }

  getExpectedYield = (amount, period, desiredYield) => {
    const year = new Date().getFullYear();
    const daysInYear = (new Date(year, 11, 31) - new Date(year, 0, 0)) / (1000*60*60*24);
    return amount * period * desiredYield / daysInYear / 100;
  }

  componentDidMount() {
    const { amount, period, desiredYield } = this.props;
    this.setState({
      amount: {
        value: amount.defaultValue,
      },
      period: {
        value: period.defaultValue,
      },
      desiredYield: {
        value: desiredYield.defaultValue,
      },
      expectedYield: {
        value: this.getExpectedYield(amount.defaultValue, period.defaultValue, desiredYield.defaultValue)
      }
    });
  }

  onChange = (val, name) => {
    const stateNewVal = {...this.state[name], value: val};
    const newState = {...this.state, [name]: stateNewVal};
    const expectedYield = {...this.state.expectedYield, value: this.getExpectedYield(newState.amount.value, newState.period.value, newState.desiredYield.value)};
    const newStateExp = {...newState, expectedYield};
    this.setState(newStateExp);
  }

  render() {
    const { amount, period, desiredYield, theme } = this.props;
    return (
      <Card>
        <Heading textAlign="center">
          Кредитный калькулятор
        </Heading>
        <Row>
          <CreditCardColumn>
            <Text>
              Сумма инвестирования:
            </Text>
            <Text fontSize={[3, null,  4]} color="purple.main">
              {formatCurrency(this.state.amount.value)} ₽
            </Text>
          </CreditCardColumn>
          <CreditCardColumn range>
            <CreditCardSlider val={amount} onChange={val => this.onChange(val, 'amount')} />
          </CreditCardColumn>
        </Row>
        <Row>
          <CreditCardColumn>
            <Text>
              Срок вложения:
            </Text>
            <Text fontSize={[3, null,  4]} color="purple.main">
              {this.state.period.value} {declension('месяц', 'месяцев', 'месяца', this.state.period.value)}
            </Text>
          </CreditCardColumn>
          <CreditCardColumn range>
            <CreditCardSlider val={period} onChange={val => this.onChange(val, 'period')} />
          </CreditCardColumn>
        </Row>
        <Row>
          <CreditCardColumn>
            <Text>
              Желаемая доходность:
            </Text>
            <Text fontSize={[3, null,  4]} color="purple.main">
              от {this.state.desiredYield.value}%
            </Text>
          </CreditCardColumn>
          <CreditCardColumn range>
            <CreditCardSlider val={desiredYield} onChange={val => this.onChange(val, 'desiredYield')} />
            <Text color="gray.dark" fontSize={1}>
              Обращаем ваше внимание, что процент доходности может преобразоваться в связи с исполнением заемщика своих выплат
            </Text>
          </CreditCardColumn>
        </Row>
        <Row>
          <CreditCardColumn>
            <Text>
              Вероятность потерь:
            </Text>
          </CreditCardColumn>
          <CreditCardColumn range>
            <CreditCardSlider
              removeMarks
              val={this.state.risk}
              handleStyle={{borderColor: theme.colors.green.main}}
              trackStyle={{background: 'transparent'}}
              railStyle={{background: `linear-gradient(to right, ${theme.colors.green.main}, ${theme.colors.orange.main}, ${theme.colors.red.main})`}} />
            <Text color="gray.dark" fontSize={1}>
              Информируем вас, что с увеличением процента доходности возрастает и риск инвестиции
            </Text>
          </CreditCardColumn>
        </Row>
        <Divider height="2px"/>
        <Row>
          <Column width={[1, 1/2]}>
            <Text>
              Ожидаемая доходность:
            </Text>
            <Text fontSize={[3, null,  4]} color="purple.main">
              {formatCurrency(parseInt(this.state.expectedYield.value))} ₽
            </Text>
          </Column>
          <Column width={[1, 1/2]}>
            <Text>
              НДФЛ:
            </Text>
            <Text fontSize={[3, null,  4]} color="purple.main">
              {formatCurrency(parseInt(this.state.expectedYield.value * 0.13))} ₽
            </Text>
          </Column>
        </Row>
      </Card>
    );
  }
}

export default withTheme(CreditCalc);