

        
# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project does adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2025-02-22
Initial improvements and enhancements related to Relay functionality with error suppression and directive handling.
### Changed
- Pre-suppress error ahead of JSX intrinsics in relay synced files. ([View Commit](https://github.com/facebook/relay/commit/a5c01d40d58fb86702f869e4454b888a71419cff))
- Add enabledProvider argument inside @exec_time_resolvers directive affecting runtime and artifacts. ([View Commit](https://github.com/facebook/relay/commit/e29e1f947be83e65c689cb8f8be12ad2a4b24f51))
- Updated tests to accommodate new behavior. 
### Added
- Allow @match on client edges with updated logic in RelayResolverFieldTransform. ([View Commit](https://github.com/facebook/relay/commit/ee924ca4a526be09eb45ab48398e217dc5d5a51f))
- Added MATCH_CONSTANTS to imports. 

## 2025-02-21
Further enhancements to query handling and codemods executed for better compatibility and performance in the Relay system.
### Changed
- Modify useLazyLoadClientQuery to handle exec time resolvers with a flag. ([View Commit](https://github.com/facebook/relay/commit/322d60a4cc31f4fc2c1968f6105ff1b1b1abfaad))
- Altered test cases to reflect the changes. 
### Fixed
- Run @dangerously_unaliased_fixme codemod on Relay tests project for better fragment handling. ([View Commit](https://github.com/facebook/relay/commit/2a12ee798d2478d2f6e095005ec2acebeda1e93c))
- Modifications reflect in the codemod executions. 
### Added
- Allow @dangerously_unaliased_fixme on assignable fragments with new handling logic and test cases added. ([View Commit](https://github.com/facebook/relay/commit/37e08cec26901197b6e12b27f01119fb1d3d3077))
- Modification enhances flexibility in directive usage. 

## 2025-02-20
Optimizations and clarifications were made to the Relay's handling mechanism, addressing flag behavior and caching improvements.
### Changed
- Invert feature flag to enable enforcing @alias by default for fragments. ([View Commit](https://github.com/facebook/relay/commit/c98f82a88457404300d93a27add41c0ca964c1ce))
- Simplification of conditions and schema updates. ([View Commit](https://github.com/facebook/relay/commit/2e41a4518fa27c4afde91145f205dc1d911040de))
- Amend compiler changes to handle exec_time_resolvers exclusively with new function outcomes. 
- Updates in the field handling logic introduced for better branching. 
### Added
- Expose datachecker to the network layer enhancing operation availability checks. ([View Commit](https://github.com/facebook/relay/commit/7b68e1fb6dd851a5a449a79331eeb06a40f02ca8))
- Introduced new parameter in execute process. 

## 2025-02-19
Deployments made and several essential code improvements alongside documentation fixes improve usability and clarity within the codebase.
### Added
- Deploy version 0.261.2 to cross-platform with updated dependencies. ([View Commit](https://github.com/facebook/relay/commit/e615cd70bb87dfca0749197d21ce062aa3ed89aa))
- Version in project files modified to align with deployment. 
### Fixed
- Remove code duplication for handling 'relayLiveResolver' and 'relayResolver' cases. ([View Commit](https://github.com/facebook/relay/commit/4906015898ae9375ef97bd758a9758adb4e841d4))
- Enhanced runtime efficiency through refactoring. 
### Changed
- Update documentation by fixing broken markdown in OssOnly and FbInternalOnly blocks to improve readability. ([View Commit](https://github.com/facebook/relay/commit/caf95e9700b04cc49709bc370c4204091e4e40a0))
- Structural enhancements of several documentation segments addressing markdown rendering issues. ([View Commit](https://github.com/facebook/relay/commit/bcd5c070fbce28cffb5fdbb813df55dabe4759e2))

## 2025-02-14
This version includes critical updates to dependencies and improves clarity in verbose reports and documentation.
### Changed
- Deploy version 0.261.1 to cross-platform with necessary integrity hash updates. ([View Commit](https://github.com/facebook/relay/commit/9f20e6dbfa388531a341ffc75ae1846710941096))
- Adjustments in project files to maintain coherence across versions. ([View Commit](https://github.com/facebook/relay/commit/4daa9dec771ae0a286a6b65d9d8f1ca1f5d78fc4))
- Sort cached fragment report in test outputs for better readability and consistency. 
- Enhanced test output now showcases ordered fragment entries. 
        