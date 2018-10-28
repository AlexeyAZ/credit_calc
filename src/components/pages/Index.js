import React from 'react';

import Container from '../ui/Container';
import Row from '../ui/Row';
import Column from '../ui/Column';
import CreditCalc from '../CreditCalc';

const Index = () =>
  <Container>
    <Row>
      <Column width={1}>
        <CreditCalc
          amount={{
            min: 100000,
            max: 1500000,
            minDescription: ' ₽',
            maxDescription: ' ₽',
            defaultValue: 500000,
          }}
          period={{
            min: 3,
            max: 18,
            minDescription: ' месяца',
            maxDescription: ' месяцев',
            defaultValue: 12,
          }}
          desiredYield={{
            min: 14,
            max: 20,
            minDescription: '%',
            maxDescription: '%',
            defaultValue: 16,
          }}
        />
      </Column>
    </Row>
  </Container>

export default Index;