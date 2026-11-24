import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AuthAuthTokenPostRequest } from '../models/AuthAuthTokenPostRequest';
import { DocumentsArchivePostRequest } from '../models/DocumentsArchivePostRequest';
import { DocumentsDeleteDeleteRequest } from '../models/DocumentsDeleteDeleteRequest';
import { DocumentsMovePostRequest } from '../models/DocumentsMovePostRequest';
import { DocumentsRestorePostRequest } from '../models/DocumentsRestorePostRequest';
import { DocumentsUpdatePutRequest } from '../models/DocumentsUpdatePutRequest';
import { FoldersCreatePostRequest } from '../models/FoldersCreatePostRequest';
import { FoldersDeleteDeleteRequest } from '../models/FoldersDeleteDeleteRequest';
import { FoldersUpdatePutRequest } from '../models/FoldersUpdatePutRequest';
import { TeamsCreatePostRequest } from '../models/TeamsCreatePostRequest';
import { TeamsDeleteDeleteRequest } from '../models/TeamsDeleteDeleteRequest';
import { TeamsMembersAddPostRequest } from '../models/TeamsMembersAddPostRequest';
import { TeamsUpdatePutRequest } from '../models/TeamsUpdatePutRequest';
import { WorkspacesCreatePostRequest } from '../models/WorkspacesCreatePostRequest';
import { WorkspacesDeleteDeleteRequest } from '../models/WorkspacesDeleteDeleteRequest';
import { WorkspacesUpdatePutRequest } from '../models/WorkspacesUpdatePutRequest';

import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";
export class ObservableAuthenticationApi {
    private requestFactory: AuthenticationApiRequestFactory;
    private responseProcessor: AuthenticationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthenticationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthenticationApiResponseProcessor();
    }

    /**
     * 
     * API KEY Authentification
     * @param auth_auth_token_post_request
     */
    public authenticateWithHttpInfo(auth_auth_token_post_request: AuthAuthTokenPostRequest, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authenticate(auth_auth_token_post_request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authenticateWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * API KEY Authentification
     * @param auth_auth_token_post_request
     */
    public authenticate(auth_auth_token_post_request: AuthAuthTokenPostRequest, _options?: ConfigurationOptions): Observable<any> {
        return this.authenticateWithHttpInfo(auth_auth_token_post_request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { DocumentsApiRequestFactory, DocumentsApiResponseProcessor} from "../apis/DocumentsApi";
export class ObservableDocumentsApi {
    private requestFactory: DocumentsApiRequestFactory;
    private responseProcessor: DocumentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentsApiRequestFactory,
        responseProcessor?: DocumentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DocumentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DocumentsApiResponseProcessor();
    }

    /**
     * 
     * Archive Document
     * @param documents_archive_post_request
     */
    public archiveWithHttpInfo(documents_archive_post_request: DocumentsArchivePostRequest, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.archive(documents_archive_post_request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Archive Document
     * @param documents_archive_post_request
     */
    public archive(documents_archive_post_request: DocumentsArchivePostRequest, _options?: ConfigurationOptions): Observable<any> {
        return this.archiveWithHttpInfo(documents_archive_post_request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Delete Document
     * @param documents_delete_delete_request
     */
    public deleteWithHttpInfo(documents_delete_delete_request: DocumentsDeleteDeleteRequest, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.delete(documents_delete_delete_request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Delete Document
     * @param documents_delete_delete_request
     */
    public delete(documents_delete_delete_request: DocumentsDeleteDeleteRequest, _options?: ConfigurationOptions): Observable<any> {
        return this.deleteWithHttpInfo(documents_delete_delete_request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Get Document Info
     * @param [document_id] 
     */
    public getWithHttpInfo(document_id?: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.get(document_id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Get Document Info
     * @param [document_id] 
     */
    public get(document_id?: string, _options?: ConfigurationOptions): Observable<any> {
        return this.getWithHttpInfo(document_id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Get Document By Workspace
     * @param [workspace_id] 
     */
    public listWithHttpInfo(workspace_id?: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.list(workspace_id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Get Document By Workspace
     * @param [workspace_id] 
     */
    public list(workspace_id?: string, _options?: ConfigurationOptions): Observable<any> {
        return this.listWithHttpInfo(workspace_id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Move Document
     * @param documents_move_post_request
     */
    public moveWithHttpInfo(documents_move_post_request: DocumentsMovePostRequest, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.move(documents_move_post_request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Move Document
     * @param documents_move_post_request
     */
    public move(documents_move_post_request: DocumentsMovePostRequest, _options?: ConfigurationOptions): Observable<any> {
        return this.moveWithHttpInfo(documents_move_post_request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Restore Document 
     * @param documents_restore_post_request
     */
    public restoreWithHttpInfo(documents_restore_post_request: DocumentsRestorePostRequest, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.restore(documents_restore_post_request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restoreWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Restore Document 
     * @param documents_restore_post_request
     */
    public restore(documents_restore_post_request: DocumentsRestorePostRequest, _options?: ConfigurationOptions): Observable<any> {
        return this.restoreWithHttpInfo(documents_restore_post_request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Stream Document Copy
     * @param body
     * @param [document_id] 
     */
    public streamWithHttpInfo(body: any, document_id?: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.stream(body, document_id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.streamWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Stream Document Copy
     * @param body
     * @param [document_id] 
     */
    public stream(body: any, document_id?: string, _options?: ConfigurationOptions): Observable<any> {
        return this.streamWithHttpInfo(body, document_id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Update Document
     * @param documents_update_put_request
     */
    public updateWithHttpInfo(documents_update_put_request: DocumentsUpdatePutRequest, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.update(documents_update_put_request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Update Document
     * @param documents_update_put_request
     */
    public update(documents_update_put_request: DocumentsUpdatePutRequest, _options?: ConfigurationOptions): Observable<any> {
        return this.updateWithHttpInfo(documents_update_put_request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Upload Document 
     * @param [workspace_id] 
     * @param [folder_id] 
     * @param [file1]
     * @param [file2]
     */
    public uploadWithHttpInfo(workspace_id?: string, folder_id?: string, file1?: HttpFile, file2?: HttpFile, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.upload(workspace_id, folder_id, file1, file2, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Upload Document 
     * @param [workspace_id] 
     * @param [folder_id] 
     * @param [file1]
     * @param [file2]
     */
    public upload(workspace_id?: string, folder_id?: string, file1?: HttpFile, file2?: HttpFile, _options?: ConfigurationOptions): Observable<any> {
        return this.uploadWithHttpInfo(workspace_id, folder_id, file1, file2, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { FoldersApiRequestFactory, FoldersApiResponseProcessor} from "../apis/FoldersApi";
export class ObservableFoldersApi {
    private requestFactory: FoldersApiRequestFactory;
    private responseProcessor: FoldersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FoldersApiRequestFactory,
        responseProcessor?: FoldersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FoldersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FoldersApiResponseProcessor();
    }

    /**
     * 
     * Get Folder Content
     * @param [folder_id] 
     */
    public contentWithHttpInfo(folder_id?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.content(folder_id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contentWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Get Folder Content
     * @param [folder_id] 
     */
    public content(folder_id?: Array<string>, _options?: ConfigurationOptions): Observable<any> {
        return this.contentWithHttpInfo(folder_id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Create Folder
     * @param folders_create_post_request
     */
    public createWithHttpInfo(folders_create_post_request: FoldersCreatePostRequest, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.create(folders_create_post_request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Create Folder
     * @param folders_create_post_request
     */
    public create(folders_create_post_request: FoldersCreatePostRequest, _options?: ConfigurationOptions): Observable<any> {
        return this.createWithHttpInfo(folders_create_post_request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Delete Folder
     * @param folders_delete_delete_request
     */
    public deleteWithHttpInfo(folders_delete_delete_request: FoldersDeleteDeleteRequest, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.delete(folders_delete_delete_request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Delete Folder
     * @param folders_delete_delete_request
     */
    public delete(folders_delete_delete_request: FoldersDeleteDeleteRequest, _options?: ConfigurationOptions): Observable<any> {
        return this.deleteWithHttpInfo(folders_delete_delete_request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Get Folder Details
     * @param [folder_id] 
     */
    public getWithHttpInfo(folder_id?: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.get(folder_id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Get Folder Details
     * @param [folder_id] 
     */
    public get(folder_id?: string, _options?: ConfigurationOptions): Observable<any> {
        return this.getWithHttpInfo(folder_id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Get Folders 
     * @param workspace_id 
     */
    public listWithHttpInfo(workspace_id: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.list(workspace_id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Get Folders 
     * @param workspace_id 
     */
    public list(workspace_id: string, _options?: ConfigurationOptions): Observable<any> {
        return this.listWithHttpInfo(workspace_id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Move Folder
     * @param folders_delete_delete_request
     */
    public moveWithHttpInfo(folders_delete_delete_request: FoldersDeleteDeleteRequest, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.move(folders_delete_delete_request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Move Folder
     * @param folders_delete_delete_request
     */
    public move(folders_delete_delete_request: FoldersDeleteDeleteRequest, _options?: ConfigurationOptions): Observable<any> {
        return this.moveWithHttpInfo(folders_delete_delete_request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Update Folder
     * @param folders_update_put_request
     */
    public updateWithHttpInfo(folders_update_put_request: FoldersUpdatePutRequest, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.update(folders_update_put_request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Update Folder
     * @param folders_update_put_request
     */
    public update(folders_update_put_request: FoldersUpdatePutRequest, _options?: ConfigurationOptions): Observable<any> {
        return this.updateWithHttpInfo(folders_update_put_request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { TeamsApiRequestFactory, TeamsApiResponseProcessor} from "../apis/TeamsApi";
export class ObservableTeamsApi {
    private requestFactory: TeamsApiRequestFactory;
    private responseProcessor: TeamsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamsApiRequestFactory,
        responseProcessor?: TeamsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TeamsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TeamsApiResponseProcessor();
    }

    /**
     * 
     * Create Team
     * @param teams_create_post_request
     */
    public createWithHttpInfo(teams_create_post_request: TeamsCreatePostRequest, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.create(teams_create_post_request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Create Team
     * @param teams_create_post_request
     */
    public create(teams_create_post_request: TeamsCreatePostRequest, _options?: ConfigurationOptions): Observable<any> {
        return this.createWithHttpInfo(teams_create_post_request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Get Team Data
     */
    public dashboardWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.dashboard(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dashboardWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Get Team Data
     */
    public dashboard(_options?: ConfigurationOptions): Observable<any> {
        return this.dashboardWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Delete Team
     * @param teams_delete_delete_request
     */
    public deleteWithHttpInfo(teams_delete_delete_request: TeamsDeleteDeleteRequest, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.delete(teams_delete_delete_request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Delete Team
     * @param teams_delete_delete_request
     */
    public delete(teams_delete_delete_request: TeamsDeleteDeleteRequest, _options?: ConfigurationOptions): Observable<any> {
        return this.deleteWithHttpInfo(teams_delete_delete_request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Get Account Teams
     */
    public listWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.list(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Get Account Teams
     */
    public list(_options?: ConfigurationOptions): Observable<any> {
        return this.listWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Get Team Details
     * @param body
     * @param [team_id] 
     */
    public getWithHttpInfo(body: any, team_id?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.get(body, team_id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Get Team Details
     * @param body
     * @param [team_id] 
     */
    public get(body: any, team_id?: Array<string>, _options?: ConfigurationOptions): Observable<any> {
        return this.getWithHttpInfo(body, team_id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Get Team logs
     * @param [team_id] team Id
     * @param [page] 
     * @param [limit] 
     */
    public logsWithHttpInfo(team_id?: Array<string>, page?: string, limit?: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.logs(team_id, page, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.logsWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Get Team logs
     * @param [team_id] team Id
     * @param [page] 
     * @param [limit] 
     */
    public logs(team_id?: Array<string>, page?: string, limit?: string, _options?: ConfigurationOptions): Observable<any> {
        return this.logsWithHttpInfo(team_id, page, limit, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Update Team Data
     * @param teams_update_put_request
     */
    public updateWithHttpInfo(teams_update_put_request: TeamsUpdatePutRequest, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.update(teams_update_put_request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Update Team Data
     * @param teams_update_put_request
     */
    public update(teams_update_put_request: TeamsUpdatePutRequest, _options?: ConfigurationOptions): Observable<any> {
        return this.updateWithHttpInfo(teams_update_put_request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Get Team workspaces
     * @param [team_id] team Id
     */
    public workspacesWithHttpInfo(team_id?: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.workspaces(team_id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workspacesWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Get Team workspaces
     * @param [team_id] team Id
     */
    public workspaces(team_id?: string, _options?: ConfigurationOptions): Observable<any> {
        return this.workspacesWithHttpInfo(team_id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { TeamsMembersApiRequestFactory, TeamsMembersApiResponseProcessor} from "../apis/TeamsMembersApi";
export class ObservableTeamsMembersApi {
    private requestFactory: TeamsMembersApiRequestFactory;
    private responseProcessor: TeamsMembersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamsMembersApiRequestFactory,
        responseProcessor?: TeamsMembersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TeamsMembersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TeamsMembersApiResponseProcessor();
    }

    /**
     * 
     * Add Team Member Copy
     * @param teams_members_add_post_request
     */
    public addWithHttpInfo(teams_members_add_post_request: TeamsMembersAddPostRequest, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.add(teams_members_add_post_request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Add Team Member Copy
     * @param teams_members_add_post_request
     */
    public add(teams_members_add_post_request: TeamsMembersAddPostRequest, _options?: ConfigurationOptions): Observable<any> {
        return this.addWithHttpInfo(teams_members_add_post_request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Get Team Members
     * @param [team_id] 
     * @param [page] 
     * @param [limit] 
     */
    public listWithHttpInfo(team_id?: string, page?: number, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.list(team_id, page, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Get Team Members
     * @param [team_id] 
     * @param [page] 
     * @param [limit] 
     */
    public list(team_id?: string, page?: number, limit?: number, _options?: ConfigurationOptions): Observable<any> {
        return this.listWithHttpInfo(team_id, page, limit, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { WorkspacesApiRequestFactory, WorkspacesApiResponseProcessor} from "../apis/WorkspacesApi";
export class ObservableWorkspacesApi {
    private requestFactory: WorkspacesApiRequestFactory;
    private responseProcessor: WorkspacesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WorkspacesApiRequestFactory,
        responseProcessor?: WorkspacesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WorkspacesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WorkspacesApiResponseProcessor();
    }

    /**
     * 
     * Create New Workspace
     * @param workspaces_create_post_request
     */
    public createWithHttpInfo(workspaces_create_post_request: WorkspacesCreatePostRequest, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.create(workspaces_create_post_request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Create New Workspace
     * @param workspaces_create_post_request
     */
    public create(workspaces_create_post_request: WorkspacesCreatePostRequest, _options?: ConfigurationOptions): Observable<any> {
        return this.createWithHttpInfo(workspaces_create_post_request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Delete workspace
     * @param workspaces_delete_delete_request
     */
    public deleteWithHttpInfo(workspaces_delete_delete_request: WorkspacesDeleteDeleteRequest, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.delete(workspaces_delete_delete_request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Delete workspace
     * @param workspaces_delete_delete_request
     */
    public delete(workspaces_delete_delete_request: WorkspacesDeleteDeleteRequest, _options?: ConfigurationOptions): Observable<any> {
        return this.deleteWithHttpInfo(workspaces_delete_delete_request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Get Workspace Details
     * @param [workspace_id] 
     */
    public getWithHttpInfo(workspace_id?: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.get(workspace_id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Get Workspace Details
     * @param [workspace_id] 
     */
    public get(workspace_id?: string, _options?: ConfigurationOptions): Observable<any> {
        return this.getWithHttpInfo(workspace_id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Get Account Drive
     */
    public driveWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.drive(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.driveWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Get Account Drive
     */
    public drive(_options?: ConfigurationOptions): Observable<any> {
        return this.driveWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Get Workspaces By Team
     * @param [team_id] team Id
     */
    public listWithHttpInfo(team_id?: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.list(team_id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Get Workspaces By Team
     * @param [team_id] team Id
     */
    public list(team_id?: string, _options?: ConfigurationOptions): Observable<any> {
        return this.listWithHttpInfo(team_id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Get Team Workspaces
     * @param [team_id] 
     */
    public byTeamWithHttpInfo(team_id?: string, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.byTeam(team_id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.byTeamWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Get Team Workspaces
     * @param [team_id] 
     */
    public byTeam(team_id?: string, _options?: ConfigurationOptions): Observable<any> {
        return this.byTeamWithHttpInfo(team_id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * 
     * Update workspace
     * @param workspaces_update_put_request
     */
    public updateWithHttpInfo(workspaces_update_put_request: WorkspacesUpdatePutRequest, _options?: ConfigurationOptions): Observable<HttpInfo<any>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.update(workspaces_update_put_request, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     * Update workspace
     * @param workspaces_update_put_request
     */
    public update(workspaces_update_put_request: WorkspacesUpdatePutRequest, _options?: ConfigurationOptions): Observable<any> {
        return this.updateWithHttpInfo(workspaces_update_put_request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}
