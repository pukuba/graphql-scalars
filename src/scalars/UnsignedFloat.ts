import { GraphQLScalarType } from 'graphql';
import { GraphQLNonNegativeFloatConfig } from './NonNegativeFloat.js';

const GraphQLUnsignedFloatConfig = /*#__PURE__*/ Object.assign({}, GraphQLNonNegativeFloatConfig, {
  name: 'UnsignedFloat',
});

export const GraphQLUnsignedFloat: GraphQLScalarType = /*#__PURE__*/ new GraphQLScalarType(GraphQLUnsignedFloatConfig);
