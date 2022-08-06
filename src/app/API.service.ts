/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateBet: OnCreateBetSubscription;
  onUpdateBet: OnUpdateBetSubscription;
  onDeleteBet: OnDeleteBetSubscription;
};

export type CreateBetInput = {
  id?: string | null;
  stake?: number | null;
  time?: string | null;
  timestamp?: number | null;
  coords?: Array<number | null> | null;
  description?: string | null;
  outcome?: boolean | null;
};

export type ModelBetConditionInput = {
  stake?: ModelIntInput | null;
  time?: ModelStringInput | null;
  timestamp?: ModelFloatInput | null;
  coords?: ModelFloatInput | null;
  description?: ModelStringInput | null;
  outcome?: ModelBooleanInput | null;
  and?: Array<ModelBetConditionInput | null> | null;
  or?: Array<ModelBetConditionInput | null> | null;
  not?: ModelBetConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Bet = {
  __typename: "Bet";
  id: string;
  stake?: number | null;
  time?: string | null;
  timestamp?: number | null;
  coords?: Array<number | null> | null;
  description?: string | null;
  outcome?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBetInput = {
  id: string;
  stake?: number | null;
  time?: string | null;
  timestamp?: number | null;
  coords?: Array<number | null> | null;
  description?: string | null;
  outcome?: boolean | null;
};

export type DeleteBetInput = {
  id: string;
};

export type ModelBetFilterInput = {
  id?: ModelIDInput | null;
  stake?: ModelIntInput | null;
  time?: ModelStringInput | null;
  timestamp?: ModelFloatInput | null;
  coords?: ModelFloatInput | null;
  description?: ModelStringInput | null;
  outcome?: ModelBooleanInput | null;
  and?: Array<ModelBetFilterInput | null> | null;
  or?: Array<ModelBetFilterInput | null> | null;
  not?: ModelBetFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelBetConnection = {
  __typename: "ModelBetConnection";
  items: Array<Bet | null>;
  nextToken?: string | null;
};

export type CreateBetMutation = {
  __typename: "Bet";
  id: string;
  stake?: number | null;
  time?: string | null;
  timestamp?: number | null;
  coords?: Array<number | null> | null;
  description?: string | null;
  outcome?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBetMutation = {
  __typename: "Bet";
  id: string;
  stake?: number | null;
  time?: string | null;
  timestamp?: number | null;
  coords?: Array<number | null> | null;
  description?: string | null;
  outcome?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBetMutation = {
  __typename: "Bet";
  id: string;
  stake?: number | null;
  time?: string | null;
  timestamp?: number | null;
  coords?: Array<number | null> | null;
  description?: string | null;
  outcome?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type GetBetQuery = {
  __typename: "Bet";
  id: string;
  stake?: number | null;
  time?: string | null;
  timestamp?: number | null;
  coords?: Array<number | null> | null;
  description?: string | null;
  outcome?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type ListBetsQuery = {
  __typename: "ModelBetConnection";
  items: Array<{
    __typename: "Bet";
    id: string;
    stake?: number | null;
    time?: string | null;
    timestamp?: number | null;
    coords?: Array<number | null> | null;
    description?: string | null;
    outcome?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateBetSubscription = {
  __typename: "Bet";
  id: string;
  stake?: number | null;
  time?: string | null;
  timestamp?: number | null;
  coords?: Array<number | null> | null;
  description?: string | null;
  outcome?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBetSubscription = {
  __typename: "Bet";
  id: string;
  stake?: number | null;
  time?: string | null;
  timestamp?: number | null;
  coords?: Array<number | null> | null;
  description?: string | null;
  outcome?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBetSubscription = {
  __typename: "Bet";
  id: string;
  stake?: number | null;
  time?: string | null;
  timestamp?: number | null;
  coords?: Array<number | null> | null;
  description?: string | null;
  outcome?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateBet(
    input: CreateBetInput,
    condition?: ModelBetConditionInput
  ): Promise<CreateBetMutation> {
    const statement = `mutation CreateBet($input: CreateBetInput!, $condition: ModelBetConditionInput) {
        createBet(input: $input, condition: $condition) {
          __typename
          id
          stake
          time
          timestamp
          coords
          description
          outcome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBetMutation>response.data.createBet;
  }
  async UpdateBet(
    input: UpdateBetInput,
    condition?: ModelBetConditionInput
  ): Promise<UpdateBetMutation> {
    const statement = `mutation UpdateBet($input: UpdateBetInput!, $condition: ModelBetConditionInput) {
        updateBet(input: $input, condition: $condition) {
          __typename
          id
          stake
          time
          timestamp
          coords
          description
          outcome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBetMutation>response.data.updateBet;
  }
  async DeleteBet(
    input: DeleteBetInput,
    condition?: ModelBetConditionInput
  ): Promise<DeleteBetMutation> {
    const statement = `mutation DeleteBet($input: DeleteBetInput!, $condition: ModelBetConditionInput) {
        deleteBet(input: $input, condition: $condition) {
          __typename
          id
          stake
          time
          timestamp
          coords
          description
          outcome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBetMutation>response.data.deleteBet;
  }
  async GetBet(id: string): Promise<GetBetQuery> {
    const statement = `query GetBet($id: ID!) {
        getBet(id: $id) {
          __typename
          id
          stake
          time
          timestamp
          coords
          description
          outcome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBetQuery>response.data.getBet;
  }
  async ListBets(
    filter?: ModelBetFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBetsQuery> {
    const statement = `query ListBets($filter: ModelBetFilterInput, $limit: Int, $nextToken: String) {
        listBets(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            stake
            time
            timestamp
            coords
            description
            outcome
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBetsQuery>response.data.listBets;
  }
  OnCreateBetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBet">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBet {
        onCreateBet {
          __typename
          id
          stake
          time
          timestamp
          coords
          description
          outcome
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBet">>
  >;

  OnUpdateBetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBet">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBet {
        onUpdateBet {
          __typename
          id
          stake
          time
          timestamp
          coords
          description
          outcome
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBet">>
  >;

  OnDeleteBetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBet">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBet {
        onDeleteBet {
          __typename
          id
          stake
          time
          timestamp
          coords
          description
          outcome
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBet">>
  >;
}
